import React from "react";
import style from './statisticalList.module.scss'

const StatisticalList=({label,percentage}) => (
    <>
        <span className="label">{label}</span>
        <span className={style.percentage}>{percentage}%</span>
</>
)

 export default StatisticalList;