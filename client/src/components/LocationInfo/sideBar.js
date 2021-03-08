
import React from 'react';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Href from "./Href";

import Button from '@material-ui/core/Button';

import "./styleLocation.css";
import styled from "styled-components";
const StyledButton = styled(Button)`
	 width: 50%;
	 height: 50px;
	 background: #f3f0f1;
	 position: relative;
	 background: #f3f0f1;
	 margin-bottom: 25px;
	 border-radius: 32px;
	 text-align: center;
	 cursor: pointer;
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
  text: "Town Bangalow | Make the move to Bangalow",
  link: "http://www.townbangalow.com.au"
};
const testData1 = {
  text: "Byron Bay Beaches | Official byronbay.com Guide",
  link: "https://www.byron-bay.com/beaches/"
};
const testData2 = {
  text: "Home of Brookie’s Gin | Cape Byron Distillery",
  link: "https://www.capebyrondistillery.com"
};

const testData3 = {
  text: "Federal Doma Cafe",
  link: "https://www.facebook.com/Federal-Doma-Cafe-444756125571324/"
};
const testData4 = {
  text: "Byron Bay Restaurant and Wedding Venue | Harvest Newrybar",
  link: "https://harvestnewrybar.com.au"
};

const SideDescription = () => {
        return (
            <div className="LocationHeader">
                <Container  fluid >
                    <Row>
                        <div className="LocationFinePrint">
                            <Col >
                                    {/* <ul className='list-unstyled'> {items} </ul> */}
                            </Col>
                            <div className="LocationList">
                            <h1 className="LocationH1">Things To Do</h1>
                            
                    <ul className='list-unstyled'>
                                    <li>
                                        <Href
                                        text={testData.text}
                                        url={testData.link}
                                        />
                                    </li>
                                    <li>
                                        <Href
                                        text={testData1.text}
                                        url={testData1.link}
                                        />
                                    </li>
                                    <li>
                                        <Href
                                        text={testData2.text}
                                        url={testData2.link}
                                        />
                      </li>
                      
                                    <li>
                                        <Href
                                        text={testData3.text}
                                        url={testData3.link}
                                        />
                                    </li>
                                        <li>
                                        <Href
                                        text={testData4.text}
                                        url={testData4.link}
                                        />
                                    </li>
                                  </ul>
                                </div>
                              <Col md={12}>
                                <StyledButton   href="./about" >
                                      Photos
                                  </StyledButton>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        );
}

export default SideDescription;