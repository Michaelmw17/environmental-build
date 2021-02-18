import React, { Suspense } from 'react';
import "./style.css";
import SideBarNav from '../../AppNav/hamburgerNav';
// import AboutDescription from '../../AboutContext/aboutDescription'
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer'
import { lazy } from '@loadable/component'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const AboutDescription = lazy(() => import('../../LandingJumbo/LandingJumbo'), {
    fallback: <div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>
})
class About extends React.Component {
    render() {
        return (<div>
            <div className="landing-grid-about">
                <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
                {/* <Pulse> */}
                <Navbar />
                <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                    <AboutDescription />
                </Suspense>
            </div>
            <Footer />
        </div>
        );
    }
}

export default About;