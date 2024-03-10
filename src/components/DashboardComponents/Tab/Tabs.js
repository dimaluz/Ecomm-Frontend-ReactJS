import React from "react";
import Tab from "./Tab";
import { TabData } from "./TabData";

const Tabs = () => {
    return(
        <div className="numeric-stat-content">
            {TabData.map((tab, id)=>{
                return (
                    <div className='tab-item'>
                        <Tab key={id} title={tab.title} percentage={tab.barValue} amount={tab.value} />
                    </div>
                )
            })}
        </div>
    )
}

export default Tabs;