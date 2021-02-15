import React from 'react';
import LandingJumbo from "../../LandingJumbo/LandingJumbo";
import SideBarNav from '../../AppNav/hamburgerNav';
import Footer from '../../Footer'

function DashBoard() {
    return (<div>
        <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className="pl-0 container landing">
            <LandingJumbo />
        </div>
        <Footer />
        </div>
    );
}

export default DashBoard;

