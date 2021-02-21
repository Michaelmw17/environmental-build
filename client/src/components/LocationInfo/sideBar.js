
import React from 'react';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Href from "./Href";
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import "./styleLocation.css";
import styled from "styled-components";
const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #D3959B 30%, #1D976C 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .30);
`;

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});


const words = ['Hinterland getaways in spectacular location 495 Friday Hut Road, Possum Creek', 'Two accommodation options available', 'Main "Rosella" house 3 bedrooms', 'Flat "Bluebird" house 1 bedroom self-contained unit', 'Rustic clay tennis court', ' Set on rainforest pocket ', 'Plentiful water supply','Vegetable garden', 'Wildlife - Koalas, Platypus, Wallabies', 'Close to Bangalow and Byron Bay'];
const items = words.map((word, e) => {
    return <li key={e}>{word}</li>;
});

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
                <Container>
                    <Row>
                        <div className="LocationFinePrint">
                            <Col md={12}>
                                    <ul> {items} </ul>
                            </Col>
                            <div className="LocationList">
                            <h1 className="LocationH1">Things To Do</h1>
                            <ul>
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
                          <StyledButton  href="./about" >
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