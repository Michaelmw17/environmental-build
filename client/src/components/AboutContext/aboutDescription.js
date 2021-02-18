
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
class AboutDescription extends Component {
    
    render() {
        
        return (
            <div className="FormHeader">
                <Container>
                    <HeaderAbout/>
                    <hr className="hrAbout" style={{ borderTop: '1px solid rgba(63, 81, 181, 0.5)' }} />
                    <Container>
                        <div className="PhotoGallery">
                        <Row>
                                <Col xs={12} sm={12} md={12} lg={6}>
                                    <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                                        <Carousel />
                                    </Suspense>
                            </Col>
                                <Col xs={12} sm={12} md={12} lg={6}>
                                      <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
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
                                    <ul> {items} </ul>
                                </Col>
                                    <Col xs={12} sm={12} md={12} lg={8}>
                                        <div className='aboutDescriptionParagraphDiv'>
                                                <p className='aboutDescriptionParagraph'>
                                                The location of Possum Creek is renowned for its beauty and handy location to Bangalow and the beaches of Byron Bay. Here you will find a special home lovingly constructed using timber and Mt Warning basalt rock. The house outlook is North and overlooking rolling fields With a sparkling clear waterhole a short walk through the Rainforest pocket away this property will provide its new owners with a brilliant hinterland lifestyle.
                                                </p>
                                                <p className='aboutDescriptionParagraph'>
                                                This holiday getaway has it all in a low environmental impact home. Environmental features include rainforest pockets, access to Opussum creek swimming hole, pristine koala, abundant birdlife, wallabies and platypus habitat. The home is solar powered with plentiful raintank sourced water. Enjoy the comforts of a cosy home with a fireplace and NBN access in a pristine environment.
                                                </p>
                                        </div>
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