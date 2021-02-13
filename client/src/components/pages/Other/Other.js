import React from 'react';
// import Sidebar from '../../Sidebar/Sidebar';
import DashboardNewsCard from '../../DashboardNewsCard/DashboardNewsCard';
import SideBarNav from '../../AppNav/hamburgerNav';

import './style.css';

function Roster() {
    return (
        <div className="container-fluid h-100 p-0 m-0">
 <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
            {/* <Sidebar /> */}
            <div className="content">
                <DashboardNewsCard />
            </div>
        </div>
    );
}

export default Roster;
