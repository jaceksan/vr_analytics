// (C) 2007-2022 GoodData Corporation
import Page from "../components/Page";
import {Execute, LoadingComponent, ErrorComponent, IExecuteErrorComponentProps, IDataSlice} from "@gooddata/sdk-ui";
import { modifyAttribute, modifyMeasure } from "@gooddata/sdk-model";
import * as Md from "../md/full";
import React from "react";
// https://medium.com/vacatronics/how-to-add-3d-charts-to-your-react-app-ce9e46878f
// https://plotly.com/javascript/3d-surface-plots/
// @ts-ignore
import Plot from "react-plotly.js"

const dayOfWeek = modifyAttribute(
    Md.DateDatasets.DepTime.DepTimeDayOfWeek.Default,
    (a) => a.alias("Department time(Day of Week)")
);
const monthDate = modifyAttribute(
    Md.DateDatasets.DepTime.DepTimeMonthYear.Default,
    (a) => a.alias("Department time(Month)")
);
const DepDelaySum = modifyMeasure(
    Md.DepDelay.Sum, (a) => a.alias("Department Delay(SUM)").format("#,##0")
)
const seriesBy = [DepDelaySum];
const slicesBy = [dayOfWeek, monthDate];

const CustomErrorComponent = ({ error }: IExecuteErrorComponentProps) => (
    <ErrorComponent
        message="There was an error getting your execution"
        description={JSON.stringify(error, null, 2)}
    />
);

const Chart3D_v2: React.FC = () => {
    return (
        <Page>
            <div><h1>Flight Depart Delays in Time</h1></div>
            <Execute
                seriesBy={seriesBy}
                slicesBy={slicesBy}
                LoadingComponent={LoadingComponent}
                ErrorComponent={CustomErrorComponent}
            >
                {({ result }) => {
                    const slices = result!.data().slices().toArray();
                    const data = generateDataLines(slices)
                    return (
                        <Plot
                            data={data}
                            layout={{
                                width: 900,
                                height: 800,
                                title: `Flight Depart Delays in Time`,
                                xaxis: {
                                    title: 'Day of Week',
                                },
                                yaxis: {
                                    title: 'Month',
                                },
                                zaxis: {
                                    title: 'Department delay(minutes)',
                                }
                            }}
                        />
                    );
                }}
            </Execute>
        </Page>
    );
};

function generateDataLines(slices: IDataSlice[]) {
    const dayOfWeekValues = slices.map((slice => {
        return slice.sliceTitles()[0]
    }))
    const monthValues = slices.map((slice => {
        return slice.sliceTitles()[1] + "-01"
    }))
    const departmentDelayValues = slices.map((slice => {
        return slice.dataPoints()[0].formattedValue()
    }))
    const distinctDayOfWeekValues = dayOfWeekValues.filter((item, index) => dayOfWeekValues.indexOf(item) === index);
    let data = []
    for (let i = 0; i < distinctDayOfWeekValues.length; i++) {
        let x = []
        let y = []
        let z = []
        for (let j = 0; j < dayOfWeekValues.length; j++) {
            if (distinctDayOfWeekValues[i] === dayOfWeekValues[j]) {
                console.log(`i=${i} j=${j} dd=${distinctDayOfWeekValues[i]} d=${dayOfWeekValues[j]}`)
                x.push(dayOfWeekValues[j])
                y.push(monthValues[j])
                z.push(departmentDelayValues[j])
            }
        }
        data.push(
            {
                "x": x,
                "y": y,
                "z": z,
                "type": "scatter3d",
                "mode": "lines",
                "name": `dayOfWeek = ${distinctDayOfWeekValues[i]}`
            }
        )
    }
    return data;
}

export default Chart3D_v2;
