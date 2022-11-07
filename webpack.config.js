// (C) 2007-2019 GoodData Corporation
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = async (env, argv) => {
    const backendUrl = "https://demo-cicd.cloud.gooddata.com";
    const workspace = "faa_custom";
    const backendType = "tiger";

    // eslint-disable-next-line no-mixed-operators
    const basePath = env?.basePath || "";

    // eslint-disable-next-line no-console
    console.log("Backend URI:", backendUrl, "Workspace to use:", workspace);

    const isProduction = argv.mode === "production";

    // see also production proxy at /examples/server/src/endpoints/proxy.js
    const proxy = {
        "/api": {
            changeOrigin: true,
            cookieDomainRewrite: "localhost",
            secure: false,
            target: backendUrl,
            headers: {
                host: backendUrl,
                // This is essential for Tiger backends. To ensure 401 flies when not authenticated and using proxy
                "X-Requested-With": "XMLHttpRequest",
            },
            onProxyReq(proxyReq) {
                // changeOrigin: true does not work well for POST requests, so remove origin like this to be safe
                proxyReq.removeHeader("origin");
                proxyReq.setHeader("accept-encoding", "identity");
            },
        },
    };

    const plugins = [
        new Dotenv({
            silent: false,
            systemvars: true,
        }),
        new HtmlWebpackPlugin({
            title: "GoodData.UI Developer Playground",
        }),
        new webpack.DefinePlugin({
            BACKEND_URL: JSON.stringify(backendUrl),
            BACKEND_TYPE: JSON.stringify(backendType),
            WORKSPACE: JSON.stringify(workspace),
            BASEPATH: JSON.stringify(basePath),
        }),
        new ForkTsCheckerWebpackPlugin({
            issue: {
                include: [{ file: "src/**/*.{ts,tsx}" }],
            },
        }),
    ];

    // flip the `disable` flag to false if you want to diagnose webpack perf

    return {
        entry: ["./src/index.tsx"],
        target: "web",
        mode: isProduction ? "production" : "development",
        plugins,
        output: {
            filename: "[name].[contenthash].js",
            path: path.join(__dirname, "dist"),
            publicPath: `${basePath}/`,
        },
        devtool: isProduction ? false : "cheap-module-source-map",
        node: {
            __filename: true,
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            alias: {
                react: path.resolve("./node_modules/react"),
                // fixes tilde imports in CSS from sdk-ui-ext
                "@gooddata/sdk-ui-ext": path.resolve("./node_modules/@gooddata/sdk-ui-ext"),
                "@gooddata/sdk-ui-kit": path.resolve("./node_modules/@gooddata/sdk-ui-kit"),
                "@gooddata/sdk-ui-dashboard": path.resolve("./node_modules/@gooddata/sdk-ui-dashboard"),
            },
            // Prefer ESM versions of packages to enable tree shaking and easier dev experience
            mainFields: ["module", "browser", "main"],
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.s[ac]ss$/,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
                {
                    test: /\.[jt]sx?$/,
                    include: path.resolve(__dirname, "src"),
                    use: ["babel-loader"],
                },
                {
                    test: /\.js$/,
                    include: (rawModulePath) => {
                        // Some npm modules no longer transpiled to ES5, which
                        // causes errors such in IE11.
                        const inclusionReg =
                            /node_modules\/.*((lru-cache)|(react-intl)|(intl-messageformat))/;
                        // On Windows, mPath use backslashes for folder separators. We need
                        // to convert these to forward slashes because our
                        // test regex, inclusionReg, contains one.
                        const modulePath = rawModulePath.replace(/\\/g, "/");
                        return inclusionReg.test(modulePath);
                    },
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                },
                {
                    test: /\.(jpe?g|gif|png|svg|ico|eot|woff2?|ttf|wav|mp3)$/,
                    type: "asset/resource",
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"],
                },
            ],
        },
        ignoreWarnings: [/Failed to parse source map/], // some of the dependencies have invalid source maps, we do not care that much
        devServer: {
            static: {
                directory: path.join(__dirname, "dist"),
            },
            devMiddleware: {
                stats: "errors-only",
            },
            historyApiFallback: true,
            port: 8443,
            liveReload: true,
            proxy,
        },
        stats: "errors-only",
    };
};
