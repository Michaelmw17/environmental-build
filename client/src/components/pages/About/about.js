import React from 'react';
import "./style.css";
// import ScrollAnimation from 'react-animate-on-scroll'
// import Pulse from 'react-reveal/Pulse';
import SideBarNav from '../../AppNav/hamburgerNav';
import AboutDescription from '../../AboutContext/aboutDescription'
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer'

class About extends React.Component {
    render() {
        return (<div>
            <div className="landing-grid-about">
                <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
                {/* <Pulse> */}
                <Navbar /> 
                    <AboutDescription />
                </div>
            <Footer />
        </div>
        );
    }
}

export default About;