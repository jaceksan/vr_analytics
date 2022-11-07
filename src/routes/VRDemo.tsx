import React from 'react';
import Page from "../components/Page";
import {modifyAttribute, modifyMeasure} from "@gooddata/sdk-model";
import * as Md from "../md/full";
import {Execute, ErrorComponent, IExecuteErrorComponentProps, LoadingComponent} from "@gooddata/sdk-ui";

import 'aframe';
import 'aframe-particle-system-component';
// @ts-ignore
import {Entity, Scene} from 'aframe-react';

const dayOfWeek = modifyAttribute(
    Md.DateDatasets.DepTime.DepTimeMonthOfYear.Default,
    (a) => a.alias("Department time(Day of Week)")
);
const DepDelaySum = modifyMeasure(
    Md.DepDelay.Avg, (a) => a.alias("Department Delay(AVG)").format("#,##0.00")
)
const seriesBy = [DepDelaySum];
const slicesBy = [dayOfWeek];

const CustomErrorComponent = ({ error }: IExecuteErrorComponentProps) => (
    <ErrorComponent
        message="There was an error getting your execution"
        description={JSON.stringify(error, null, 2)}
    />
);

//const colors = ["rgb(20,178,226)", "rgb(0,193,141)", "rgb(229,77,66)"];

const VRDemo: React.FC = () => {
    return (
        <Page>
            <Execute
                seriesBy={seriesBy}
                slicesBy={slicesBy}
                LoadingComponent={LoadingComponent}
                ErrorComponent={CustomErrorComponent}
            >
                {({ result }) => {
                    const start_x = -5;
                    const start_y = 3;
                    const slices = result!.data().slices().toArray();
                    const max_value = Math.max(...slices.map(value => Number(value.dataPoints()[0].formattedValue())))
                    //const series = result!.data().series().toArray();
                    const bars = slices?.map((value, index) => {
                        const value_diff = max_value - Number(value.dataPoints()[0].formattedValue())
                        const scale = `0.5 ${value.dataPoints()[0].formattedValue()} 1`
                        console.log(`scale=${scale}`)
                        return (
                            <Entity
                                geometry={{primitive: 'box'}}
                                material={{color: "rgb(20,178,226)"}}
                                position={{x: start_x + index, y: start_y - value_diff/2, z: -12}}
                                scale={scale}
                            />
                        );
                    });
                    return (
                        <Scene>
                            {bars}
                            <Entity particle-system={{preset: 'snow'}}/>
                            <Entity light={{type: 'point'}}/>
                            <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
                            <Entity
                                geometry="primitive: plane; height: auto; width: auto"
                                material="color: blue"
                                text="width: 8; align: center; value: Flight Depart Delays in Week."
                                position={{x: 0, y: -1, z: -6}}
                            />
                        </Scene>
                    )
                }}
            </Execute>
        </Page>
    );
}

export default VRDemo;
