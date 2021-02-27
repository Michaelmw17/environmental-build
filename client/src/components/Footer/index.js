import React, {  Suspense } from "react";
import Href from "../LocationInfo/Href";
import './styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub
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
                <div className="footer-call-to-action-link-wrapper">
                  <p className="footer-call-to-action-link" href="tel:0449-620-082" target="_self">
                    0449-620-082</p>
                </div>
              </div>
            </div>
            <div className="footer-social-links">
              <div className="footer-social-link linkedin" href="#" target="_blank">
                <span className="hidden-link-text">Linkedin</span>
                <a href="https://twitter.com/Michael51620516" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              </div>
              <div className="footer-social-link twitter" target="_blank">
                <span className="hidden-link-text">Twitter</span>
                <a
                    href="https://github.com/Michaelmw17"
                  className="Github social"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
              </div>
              <div className="footer-social-link youtube" href="https://www.linkedin.com/in/michael-watt-6a76961b3/" target="_blank">
                <span className="hidden-link-text">Linkedin</span>
                  <a
                  href="https://www.linkedin.com/in/michael-watt-6a76961b3/"
                  className="Linkedin social"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
              {/* <div className="footer-social-link github" href="#" target="_blank">
                <span className="hidden-link-text">Linkedin</span>
                <a
                  href="https://www.linkedin.com/in/michael-watt-6a76961b3/"
                  className="Linkedin social"
                >
                  <FontAwesomeIcon icon={faInstagram}  size="2x" />
                </a>
              </div> */}
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a className="footer-copyright-link" href="https://michaelmw17.github.io/mw/" target="_self"> ©2020. | Designed By: Michael Watt. | All rights reserved. </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  export default Footer;