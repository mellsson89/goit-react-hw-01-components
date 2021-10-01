import React from "react";
import Statistical from "../components/Statistical";
import statisticalData from '../statistical-data.json';
import generateColor from "./generateColor";

const StatisticalView=() => {

statisticalData.map(number => number.color=generateColor());

    return (
        <Statistical statistical={statisticalData} title='Upload stats'/>
    )
}

export default StatisticalView;