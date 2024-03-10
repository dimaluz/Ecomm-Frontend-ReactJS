import React from "react";
import { useState } from 'react';
import './Tab.css';
import { TabData } from "./TabData";


const styles = {
    color: 'red'
}

const Tab = (props) => {
    const percent = Number(props.percentage);

    return (
        <div className="outer-dashboard-tab">
            <div className="inner-dashboard-tab">
                
                <div className="title">{props.title}</div>
                <div className="percentage" style={percent < 0? styles : null}>{props.percentage}%</div>
                <div className='result'>
                    <span className="currency">$</span>
                    <h2>{props.amount}</h2>
                </div>
            </div>
        </div>
    )
}
export default Tab;