
import React, { Component, Suspense} from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HeaderAbout from './AboutHeader'
import "./styles.css";
import { lazy } from '@loadable/component'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Button from '@material-ui/core/Button';

import styled from "styled-components";
const StyledButton = styled(Button)`
  
	 width: 80%;
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
const Carousel = lazy(() => import('./photos'), {
    fallback: <div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>
})
const SecondCarousel = lazy(() => import('./secondPhotos'), {
    fallback: <div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>
})


const words = ['Hinterland getaways in spectacular location 495 Friday Hut Road, Possum Creek', 'Two accommodation options available', 'Main "Rosella" house 3 bedrooms', 'Flat "Bluebird" house 1 bedroom self-contained unit', 'Rustic clay tennis court', ' Set on rainforest pocket ', 'Plentiful water supply','Vegetable garden', 'Wildlife - Koalas, Platypus, Wallabies', 'Close to Bangalow and Byron Bay'];
const items = words.map((word, e) => {
    return <li key={e}>{word}</li>;
});

const sectionTwo = ['Possum Creek is a beautiful place close to Bangalow and the beaches of Byron Bay. There are two options for a holiday getaway. The main “Rosella” house outlook is North and overlooking rolling fields. The flat “Bluebird” is a one bedroom unit.  Enjoy a low environmental impact getaway include rainforest pockets, access to Possum creek swimming hole, pristine koala, abundant birdlife, wallabies and platypus habitat. The home is solar powered with plentiful rain tank sourced water. Enjoy the comforts of a cosy home with a fireplace and NBN access in a pristine environment.'];
const itemsTwo = sectionTwo.map((word, e) => {
    return <li key={e}>{word}</li>;
});
class AboutDescription extends Component {
    render() {
        return (<div>
            <div className="FormHeader">
                <Container>
                    
                    <HeaderAbout/>
                    <hr className="hrAbout" style={{
                        borderTop: '1px solid rgba(63, 81, 181, 0.5)'
                    }} />
                    <Container>
                        <div className="PhotoGallery">
                        <Row>
                                <Col xs={12} sm={12} md={12} lg={6}>
                                    <Suspense fallback={<div>
                                        <Loader type="Rings"
                                            color="#00BFFF" height={80} width={80} />
                                    </div>}>
                                        <Carousel />
                                    </Suspense>
                            </Col>
                                <Col xs={12} sm={12} md={12} lg={6}>
                                    <Suspense fallback={<div>
                                        <Loader type="Rings"
                                            color="#00BFFF"
                                            height={80} width={80}
                                        /></div>}>
                                        <SecondCarousel />
                                    </Suspense>
                                </Col> 
                            </Row>
                            </div>
                        </Container>
                    <Container>
                        <div className="container-about">
                        <div className="aboutDescription">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={4} className='ListItems'>
                                    <ul className='list-unstyled'> {items} </ul>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8}className='sectionTwo'>
                                    <ul className='list-unstyled'> {itemsTwo} </ul>
                                </Col>
                                    <Container>
                                        <Col>
                                        <StyledButton  href="./locations" >
                                                Location
                                        </StyledButton>
                                            </Col>
                                        </Container>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </Container>
            </div>
            </div>
        );
    }
}

export default AboutDescription;