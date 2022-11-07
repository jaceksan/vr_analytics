import React from 'react';
import Page from "../components/Page";
import {modifyAttribute, modifyMeasure} from "@gooddata/sdk-model";
import * as Md from "../md/full";
import {Execute, ErrorComponent, IExecuteErrorComponentProps, LoadingComponent} from "@gooddata/sdk-ui";

import 'aframe';
import 'aframe-particle-system-component';
// @ts-ignore
import {Entity, Scene} from 'aframe-react';

const attributeSlice = modifyAttribute(
    Md.DateDatasets.DepTime.DepTimeMonthOfYear.Default,
    (a) => a.alias("Month of Year")
);
const metric = modifyMeasure(
    Md.DepDelay.Avg, (a) => a.alias("Depart Delay(AVG)").format("#,##0.00")
)
const seriesBy = [metric];
const slicesBy = [attributeSlice];

const CustomErrorComponent = ({ error }: IExecuteErrorComponentProps) => (
    <ErrorComponent
        message="There was an error getting your execution"
        description={JSON.stringify(error, null, 2)}
    />
);

const handleClick = () => {
    console.log('Clicked!');
}

//const colors = ["rgb(20,178,226)", "rgb(0,193,141)", "rgb(229,77,66)"];

function getFormattedValue(value: any) {
    return value.dataPoints()[0].formattedValue()
}

function generate_bars(slices: any, max_value: number, start_x: number, start_y: number) {
    return slices?.map((value: any, index: number) => {
        const formatted_value = getFormattedValue(value)
        const value_diff = max_value - Number(formatted_value)
        const scale = `0.5 ${formatted_value} 1`
        console.log(`scale=${scale}`)
        return (
            <Entity
                geometry={{primitive: 'box'}}
                material={{color: "rgb(20,178,226)"}}
                position={{x: start_x + index, y: start_y - value_diff/2, z: -12}}
                scale={scale}
                events={{
                    click: handleClick
                }}
            />
        );
    });
}

function generate_value_texts(slices: any, max_value: number, start_x: number, start_y: number) {
    return slices?.map((value: any, index: number) => {
        const formatted_value = getFormattedValue(value)
        const info_text = `width: 6; align: center; value: ${formatted_value}`
        return (
            <Entity
                geometry={{primitive: 'plane', height: 1, width: 3}}
                material="color: red"
                text={info_text}
                position={{x: start_x + index, y: start_y + max_value/2 + 1, z: -12}}
            />
        );
    });
}

function generate_attribute_texts(slices: any, start_x: number) {
    return slices?.map((value: any, index: number) => {
        const info_text = `width: 6; align: center; value: ${value.sliceTitles()[0]}`
        return (
            <Entity
                geometry={{primitive: 'plane', height: 1, width: 3}}
                material="color: red"
                text={info_text}
                position={{x: start_x + index, y: -3, z: -12}}
            />
        );
    });
}

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
                    const max_value = Math.max(...slices.map(value => Number(getFormattedValue(value))))
                    //const series = result!.data().series().toArray();
                    const bars = generate_bars(slices, max_value, start_x, start_y);
                    const texts_values = generate_value_texts(slices, max_value, start_x, start_y);
                    const texts_attribute = generate_attribute_texts(slices, start_x);

                    return (
                        <Scene>
                            <Entity
                                geometry={{primitive: 'plane', height: 1, width: 3}}
                                material="color: red"
                                text={`width: 6; align: center; value: ${attributeSlice.attribute.alias}`}
                                position={{x: start_x - 2, y: -3, z: -12}}
                            />
                            {texts_values}
                            {bars}
                            <Entity
                                geometry={{primitive: 'plane', height: 1, width: 3}}
                                material="color: red"
                                text={`width: 6; align: center; value: ${metric.measure.alias}`}
                                position={{x: start_x - 2, y: start_y + max_value/2 + 1, z: -12}}
                            />
                            {texts_attribute}
                            <Entity particle-system={{preset: 'snow', particleCount: 5000}}/>
                            <Entity light={{type: 'point'}}/>
                            <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
                            <Entity
                                geometry="primitive: plane; height: auto; width: auto"
                                material="color: blue"
                                text={"width: 8; align: center; value: Flight Depart Delays in Week"}
                                position={{x: 0, y: -2, z: -6}}
                            />
                        </Scene>
                    )
                }}
            </Execute>
        </Page>
    );
}

export default VRDemo;
