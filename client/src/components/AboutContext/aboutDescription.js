
import React, { Component, Suspense} from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HeaderAbout from './AboutHeader'
// import SecondCarousel from './secondPhotos';
// import Carousel from './photos'
import "./styles.css";
import { lazy } from '@loadable/component'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Button from '@material-ui/core/Button';

import styled from "styled-components";
const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #005AA7 30%, #FFFDE4 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  width: 100%;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .30);
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

const sectionTwo = ['The location of Possum Creek is renowned for its beauty and handy location to Bangalow and the beaches of Byron Bay. Here you will find a special home lovingly constructed using timber and Mt Warning basalt rock. The house outlook is North and overlooking rolling fields With a sparkling clear waterhole a short walk through the Rainforest pocket away this property will provide its new owners with a brilliant hinterland lifestyle. This holiday getaway has it all in a low environmental impact home. Environmental features include rainforest pockets, access to Possum creek swimming hole, pristine koala, abundant birdlife, wallabies and platypus habitat. The home is solar powered with plentiful raintank sourced water. Enjoy the comforts of a cosy home with a fireplace and NBN access in a pristine environment.'];
const itemsTwo = sectionTwo.map((word, e) => {
    return <li key={e}>{word}</li>;
});
class AboutDescription extends Component {
    render() {
        return (
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
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <StyledButton  href="./locations" >
                                            Location
                                        </StyledButton>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default AboutDescription;