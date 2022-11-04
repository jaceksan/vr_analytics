// (C) 2007-2022 GoodData Corporation
import Page from "../components/Page";
import React from "react";
// @ts-ignore
import Plot from "react-plotly.js"

// @ts-ignore
function randomValues(num, mul) {
    const arr = [];
    const index = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.random() * mul)
        index.push(i);
    }
    return {index, arr};
}

const Chart3D_v1: React.FC = () => {
    const traces = Array(3).fill(0).map((_, i) => {
        const {index, arr} = randomValues(20, 3);
        const x = Array(20).fill(i)
        console.log(`x=${x}`)
        console.log(`y=${index}`)
        console.log(`z=${arr}`)
        return {
            x: x,
            y: index,
            z: arr,
            type: 'scatter3d',
            mode: 'lines'
        }
    });
    console.log(`traces=${traces[0]["x"]}`)
    return (
        <Page>
            <div><h1>Plotly 3D Example</h1></div>
            <Plot
                data={traces}
                layout={{
                    width: 900,
                    height: 800,
                    title: `Simple 3D Scatter`
                }}
            />
        </Page>
    );
};

export default Chart3D_v1;
