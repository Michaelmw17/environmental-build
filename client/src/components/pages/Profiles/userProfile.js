import React, { Suspense } from 'react';
import "./style.css";
import SideBarNav from '../../AppNav/hamburgerNav';
import Footer from '../../Footer'
import { lazy } from '@loadable/component'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import NavBar from '../../Navbar/Navbar'


const UserInfo = lazy(() => import('../../DescriptionProfiles/cleanProfile'), {
    fallback: <div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>
})
class userProfile extends React.Component {
    render() {
        return (
            <div className="landing-grid-about">
                <NavBar />
                        <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
                        <Suspense fallback={<div>
                            <Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                            <UserInfo/>
                        </Suspense>
                    <Footer />
                </div>
        );
    }
}

export default userProfile;