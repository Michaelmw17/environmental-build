import React from 'react';
import "./style.css";
import SideBarNav from '../../AppNav/hamburgerNav';
import WrappedMap from '../../Google/googleApi';
import LocationDescription from '../../LocationDescription/locationJumbo';
import SideDescription from '../../LocationInfo/sideBar';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from '../../Navbar/Navbar' 

function Locations() {
    return (
      <div className="landing-grid-about">
        <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Navbar />
        <LocationDescription />
                      <div className='topContainer'>    <div className="google-apps">
                            <Row>
                                  <Col xs={12} md={12} lg={6}>
                                  <SideDescription/>
                                </Col>
                        <Col xs={12} md={12} lg={6}>
          <div className="google-plus">
                <h1>Hinterland getaways in spectacular location 495 Friday Hut Road</h1>
                                  <WrappedMap
                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDClsZrp7BOREKiMZvP3P8lZhdh3UCFkqE`}
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `97vh`, marginLeft: '60px', marginRight: '60px'}} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                              />
                            </div>
                        </Col>
                      </Row>
                </div>
              </div>
            </div>
    );
}

export default Locations;