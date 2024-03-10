import React from "react";
import './Chart.css';
import TopButton from './TopButton';

const Chart = () => {
    return (
        <div className="outer-chart-tab">
            <div className="inner-chart-tab">
                <div className="title">
                    <div className="title-grid">
                        <div className="header">Overview Statistics</div>
                        <div className="top-btn">Details</div>
                        <div className="products">Details</div>
                        <div className="profit">Details</div>
                        <div className="average">Details</div>
                    </div>
                </div>
                <div className="chart">Chart</div>
            </div>
        </div>
    )
}

export default Chart;