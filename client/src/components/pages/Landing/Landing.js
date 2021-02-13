import React from "react";
import "./style.css";
import LandingJumbo from "../../LandingJumbo/LandingJumbo";
import SideBarNav from '../../AppNav/hamburgerNav';

class Landing extends React.Component {
render() {
    return (
            <>
                <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"}  />
                    <div className="container-fluid p-0 m-0">
                        <div className="d-flex justify-content-center">
                            <LandingJumbo/>
                        </div> 
                    </div>
            </>
        );
   } 
}

export default Landing;
