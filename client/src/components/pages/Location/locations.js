import React, {lazy, Suspense} from 'react';
import "./styleLocation.css";
import SideBarNav from '../../AppNav/hamburgerNav';
import LocationDescription from '../../LocationDescription/locationJumbo';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from '../../Navbar/Navbar' 
import Footer from '../../Footer'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const WrappedMap = lazy(() => import('../../Google/googleApi'), {
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
        <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Navbar />
        <LocationDescription />
                      <div className='topContainer'>    <div className="google-apps">
                            <Row>
                                  <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                              <Col xs={12} md={12} lg={6}>
                                  <SideDescription/>
                                </Col>
                            </Suspense>
                        <Col xs={12} md={12} lg={6}>
              <div className="google-plus">
                <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                              <WrappedMap
                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDClsZrp7BOREKiMZvP3P8lZhdh3UCFkqE`}
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `97vh`, marginLeft: '60px', marginRight: '60px', marginTop: '60px', marginBottom: '160px'}} />}
                                    mapElement={<div style={{ height: `100%`, borderRadius: '10px' }} />}
                              />
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