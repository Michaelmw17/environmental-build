
import React, { lazy, Suspense } from 'react';
import "./styleLocation.css";
import SideBarNav from '../../AppNav/hamburgerNav';
import LocationDescription from '../../LocationDescription/locationJumbo';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Footer from '../../Footer'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import NavBar from '../../Navbar/Navbar'

require('dotenv').config()
const MyComponent = lazy(() => import('../../Google/Googlemap'), {
  fallback: <div><Loader
    type="Rings"
    color="#00BFFF"
    timeout={9000}
    height={80} width={80} /></div>
})
const SideDescription = lazy(() => import('../../LocationInfo/sideBar'), {
  fallback: <div><Loader
    type="Rings"
    color="#00BFFF"
    timeout={9000}
    height={80} width={80} /></div>
})
function Locations() {
    return (
      <div className="landing-grid-about">
        <NavBar />
        <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <LocationDescription />
                <div className='topContainer'>
                  <div className="google-apps">
                            <Row>
                        <Col xs={12} md={6} lg={6} >
                  <div className="google-plus">
                    <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                  <MyComponent/>
                            </Suspense>
                            </div>
                          </Col>
                        <Col  xs={12} md={6} lg={6}>
                          <div className="LocationThingToDo">
                              <Suspense fallback={
                              <div>
                                <Loader type="Rings" color="#00BFFF" height={80} width={80} />
                              </div>}>
                                  <SideDescription/>
                                
                            </Suspense>
                          </div>
                          </Col>
                      </Row>
                </div>
            </div>
        <Footer />
      </div>
    );
}

export default Locations;