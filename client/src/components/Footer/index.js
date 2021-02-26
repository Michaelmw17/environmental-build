import React, { Component, Suspense } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
import Href from "../LocationInfo/Href";
import './stlyes.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import MyComp from '../MyComp/myComp'
import styled from "styled-components";
const StyledButton = styled(Button)`
  
	 width: 200px;
	 height: 40px;
	 background: #f3f0f1;
	 position: relative;
	 background: #f3f0f1;
	 margin-bottom: 25px;
	 border-radius: 32px;
	 text-align: center;
	 cursor: pointer;
   margin-top: 30px;
	 transition: all 0.1s ease-in-out;
 .Button span {
	 line-height: 100px;
	 font-family: "Montserrat", sans-serif;
	 font-size: 32px;
	 font-weight: semibold;
}
 .Button:nth-child(1) {
	 box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
	 color: #6f6cde;
}
 .Button:nth-child(1):hover {
	 opacity: 0.3;
	 box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
}
 .Button:nth-child(1):active {
	 opacity: 1;
	 box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
	 color: #79e3b6;
}
 .Button:nth-child(2) {
	 opacity: 0.3;
	 box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
	 color: #6f6cde;
}
 .Button:nth-child(3) {
	 box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
	 color: #79e3b6;
}
 .Button:nth-child(3):hover {
	 opacity: 1;
	 box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
}
`;
const testData = {
  text: "About",
  link: "./about"
};
const testDataOne = {
  text: "Enquire",
  link: "./enquire"
};
const testDataTwo = {
  text: "Location",
  link: "./locations"
};
const testDataThree = {
  text: "Profile",
  link: "./profile"
};
const testDataFour = {
  text: "Login",
  link: "./Login"
};
const testDataFive = {
  text: "Register",
  link: "./register"
};
const testDataSix = {
  text: "Privacy Notice",
  link: "https://opensource.org/licenses/MIT"
};
const testDataSeven = {
  text: "Terms of Use",
  link: "https://github.com/Michaelmw17/environmental-build"
};
const testDataGet = {
  text: "Support",
  link: "./enquire"
};

const Footer = () => {
    return (

      <div className="pg-footer">
        <footer className="footer">
          <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z" />
          </svg>
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <Link to="/" >
                <Suspense fallback={
                            <Spinner animation="border" />
                            }>
                                <MyComp /> 
                    </Suspense>
                </Link>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Company</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <ul className='list-unstyled'>
                        <li>
                            <Href
                            text={testData.text}
                            url={testData.link}
                            />
                        </li>
                              <li>
                                  <Href
                                  text={testDataOne.text}
                                  url={testDataOne.link}
                                  />
                        </li>
                              <li>
                                  <Href
                                  text={testDataTwo.text}
                                  url={testDataTwo.link}
                                  />
                        </li>
                              <li>
                                  <Href
                                  text={testDataThree.text}
                                  url={testDataThree.link}
                                  />
                        </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Get Started</h2>
                <ul id="menu-company" className="footer-menu-list">
                      <li>
                          <Href
                          text={testDataFour.text}
                          url={testDataFour.link}
                          />
                        </li>
                      <li>
                          <Href
                          text={testDataFive.text}
                          url={testDataFive.link}
                          />
                        </li>
                      <li>
                          <Href
                          text={testDataThree.text}
                          url={testDataThree.link}
                          />
                        </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li>
                          <Href
                          text={testDataSix.text}
                          url={testDataSix.link}
                          />
                        </li>
                  <li>
                          <Href
                          text={testDataSeven.text}
                          url={testDataSeven.link}
                          />
                        </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  
                  <li>
                          <Href
                          text={testDataGet.text}
                          url={testDataGet.link}
                          />
                        </li>
                  {/* <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                  </li> */}
                  
                  {/* <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Security</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Blog</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    <a href="#">Customers</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Reviews</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                      <StyledButton  href="./enquire" >
                          Enquire Now
                        </StyledButton>
                    </div>
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> You Call Us</h2>
                <p className="footer-call-to-action-link-wrapper">
                  <p className="footer-call-to-action-link" href="tel:0449-620-082" target="_self">
                    0449-620-082</p>
                </p>
              </div>
            </div>
            <div className="footer-social-links"> <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z" />
              </svg>
              <div className="footer-social-link linkedin" href="#" target="_blank">
                <span className="hidden-link-text">Linkedin</span>
                <a href="https://wwww.twitter.com" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              </div>
              <div className="footer-social-link twitter" target="_blank">
                <span className="hidden-link-text">Twitter</span>
                <a
                    href="http://www.instagram.com/larnbuildteach"
                    className="instagram social"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
              </div>
              <div className="footer-social-link youtube" href="https://www.linkedin.com/in/pooja-nahelia-340040bb/" target="_blank">
                <span className="hidden-link-text">Youtube</span>
                  <a href="https://www.facebook.com/learnbuildteach/"
                      className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
              </div>
              <div className="footer-social-link github" href="#" target="_blank">
                <span className="hidden-link-text">Github</span>
                <a
                  href="https://www.youtube.com/c/jamesqquick"
                  className="youtube social"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a className="footer-copyright-link" href="https://npooja.now.sh/" target="_self"> ©2020. | Designed By: Michael Watt. | All rights reserved. </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  export default Footer;


// const stickyFooterStyle = {
// backgroundColor: "#D3D3D3",
// fontSize: "13px",
// color: "black",
// borderTop: "transparent",
// textAlign: "center",
// padding: "10px",
// paddingTop: "40px",
// paddingRight: "40px",
// paddingBottom: "20px",
// height: "30px",
// wordWrap: "word-break",
// position: "fixed",
// left: "0",
// bottom: "0",
// width: "100%",
// opacity: "0.5",

// };

// const testData = {//eslint-disable-next-line
//   text: " Nature Vectors by Vecteezy",
//   link: "https://www.vecteezy.com/free-vector/nature"
// };

// export default class Footer extends Component {
//   render() {
//     return (
//         <Container className="container-fluid">
//         <Row>
//           <Col style={stickyFooterStyle} sm={12}>
//             &copy; Copyright  2021 | "Eco Getaway" |
//             Michaelmw17@outlook.com | (+614) 449-620-082 |
//              <Href
//                                     text={testData.text}
//                                     url={testData.link}
//                                     />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }