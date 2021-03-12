import React, { Suspense } from 'react';
import "./style.css";
import SideBarNav from '../../AppNav/hamburgerNav';
import Footer from '../../Footer'
import { lazy } from '@loadable/component'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import NavBar from '../../Navbar/Navbar'

const AboutDescription = lazy(() => import('../../AboutContext/aboutDescription'), {
    fallback: <div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>
})
class About extends React.Component {
    render() {
        return (
            <div className="landing-grid-about">
                
                <NavBar />

                        <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
                        <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                            <AboutDescription />
                        </Suspense>
                    <Footer />
                    
                    </div>
               
            
        );
    }
}

export default About;