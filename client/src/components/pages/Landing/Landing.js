import React from 'react';
// import Sidebar from '../../Sidebar/Sidebar';
import DashboardNewsCard from '../../DashboardNewsCard/DashboardNewsCard';
import LandingJumbo from "../../LandingJumbo/LandingJumbo";
import SideBarNav from '../../AppNav/hamburgerNav';
import { useAppContext } from '../../../store';
function DashBoard() {
    const [state] = useAppContext();

    console.log({state});

    return (
        <div className="pl-0 container-fluid">
            <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"}  />
                    <h1>
                    Welcome {state.user.first_name} {state.user.last_name}
                    </h1>
                <LandingJumbo/>
        </div>
    );
}

export default DashBoard;
