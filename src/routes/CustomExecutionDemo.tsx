// (C) 2007-2022 GoodData Corporation
import React from "react";
import Page from "../components/Page";
import { Execute, LoadingComponent, ErrorComponent, IExecuteErrorComponentProps } from "@gooddata/sdk-ui";
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip} from "recharts";
import { modifyAttribute, modifyMeasure } from "@gooddata/sdk-model";

import * as Md from "../md/full";

const quarterDate = modifyAttribute(
    Md.DateDatasets.DepTime.DepTimeQuarterYear.Default,
    (a) => a.alias("Department time(Quarter)")
);
const DepDelaySum = modifyMeasure(
    Md.DepDelay.Sum, (a) => a.alias("Department Delay(SUM)").format("#,##0")
)
const ArrDelaySum = modifyMeasure(
    Md.ArrDelay.Sum, (a) => a.alias("Arrival Delay(SUM)").format("#,##0")
)
const seriesBy = [DepDelaySum, ArrDelaySum];

const slicesBy = [quarterDate];

const colors = ["rgb(20,178,226)", "rgb(0,193,141)", "rgb(229,77,66)"];

const CustomErrorComponent = ({ error }: IExecuteErrorComponentProps) => (
    <ErrorComponent
        message="There was an error getting your execution"
        description={JSON.stringify(error, null, 2)}
    />
);

const ExecuteWithCustomVisualizationExample: React.FC = () => {
    return (
        <Page>
            <div><h1>Department and Arrival Flight Delays</h1></div>
            <Execute
                seriesBy={seriesBy}
                slicesBy={slicesBy}
                LoadingComponent={LoadingComponent}
                ErrorComponent={CustomErrorComponent}
            >
                {({ result }) => {
                    const series = result!.data().series().toArray();
                    const slices = result!.data().slices().toArray();

                    const bars = series?.map((value, index) => {
                        return (
                            <Bar
                                key={value.id}
                                dataKey={value.id}
                                name={value.measureTitle()}
                                fill={colors[index]}
                                stackId={"a"}
                            />
                        );
                    });

                    const data = slices?.map((slice) => ({
                        label: slice.sliceTitles()[0],
                        ...slice.dataPoints().map((p) => p!.rawValue!.toString()),
                    }));

                    return (
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="label" />
                                <YAxis domain={[0, (dataMax: number) => dataMax * 1.1]} />
                                <Tooltip />
                                <Legend />
                                {bars}
                            </BarChart>
                        </ResponsiveContainer>
                    );
                }}
            </Execute>
        </Page>
    );
};

export default ExecuteWithCustomVisualizationExample;
