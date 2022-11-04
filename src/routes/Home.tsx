import React from "react";

import Page from "../components/Page";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { idRef } from "@gooddata/sdk-model";
const dashboard = idRef("airports");

const Home: React.FC = () => {
    return <Page>
        <Dashboard dashboard={dashboard} />
    </Page>;
};

export default Home;
