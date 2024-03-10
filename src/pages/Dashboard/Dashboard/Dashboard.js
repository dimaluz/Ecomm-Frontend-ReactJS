import React from 'react';
import './Dashboard.css';
import Chart from '../../../components/DashboardComponents/Chart/Chart';
import Menu from '../../../components/DashboardComponents/Menu/Menu';
import Tabs from '../../../components/DashboardComponents/Tab/Tabs';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='menutab-container'>
                <Menu />
            </div>
            <div className='statistic-container'>
                <div className='statistic-grid'>
                    <div className='header'>Header</div>
                    
                    <Tabs />
                        
                    {/* <div className='graphic-stat-content'>
                        <Chart />
                    </div> */}
                </div>
            </div>
            <div className='stat-description-container'>
                Stat Description
            </div>
        </div>
    )
}

export default Dashboard;