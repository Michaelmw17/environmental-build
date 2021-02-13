
import React, { Component} from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HeaderAbout from './AboutHeader'
import {
  LazyImageWithBox,
  LazyImageWithPlaceholder
} from "./photos";
import "./styles.css";


// const App = () => <Gallery photos={photos} direction={"column"} />
                                    
const words = ['Creek frontage / swimming hole', 'Clay tennis court',
    'Studio/shed with bathroom',
    'Double garage and workshop',
    'Home design by Architect RH Lockwood Master built by David Oliver',
    'Blackbutt & Brushbox floors',
    'Hoop pine ceilings',
    'Plentiful water supply',
    'Wildlife - Koalas, Platypus, Wallabies',
    'Close to School Buses, Bangalow and Byron Bay'];
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
                        <div className="container-about">
                        <div className="aboutDescription">
                            <Row>
                                <Col xs={12} sm={12} md={4} lg={4}>
                                    <ul> {items} </ul>
                                </Col>
                                    <Col xs={12} sm={12} md={8} lg={8}>
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
                    <Container>
                            <div>
                                <Row>
                                    <Col md={6}>
                                <LazyImageWithBox
                                src="./Images/image2.jpg"
                                alt="Possum Creek"
                                        />
                                        </Col>
                                    {/* Keeps aspect ratio, shows gray box, fades in */}
                                    <Col md={6}>
                                <LazyImageWithBox
                                src="./Images/image3.jpg"
                                alt="Possum Creek"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                <LazyImageWithBox
                                src="./Images/image4.jpg"
                                alt="Possum Creek"
                                        />
                                        </Col>
                                    {/* Keeps aspect ratio, shows gray box, fades in */}
                                    <Col md={6}>
                                <LazyImageWithBox
                                src="./Images/image7.jpg"
                                alt="Possum Creek"
                                        />
                                    </Col>
                                </Row>
                                    {/* Keeps aspect ratio, shows placeholder image, fades in */}
                                {/* <Row>
                                <Col md={6}>
                                    <LazyImageWithPlaceholder
                                    src="./Images/image9.jpg"
                                    placeholderSrc="./Images/image9.jpg"
                                    alt="Possum Creek"
                                        />
                                    </Col>
                                    <Col md={6}>
                                    <LazyImageWithPlaceholder
                                src="./Images/image10.jpg"
                                placeholderSrc="./Images/image10.jpg"
                                alt="Possum Creek"
                                    />
                                </Col>
                            </Row>
                        <Row>
                            <Col md={6}> */}
                                {/* Keeps aspect ratio, shows placeholder image, fades in */}
                                {/* <LazyImageWithPlaceholder
                                src="./Images/image11.jpg"
                                placeholderSrc="./Images/image11.jpg"
                                alt="Possum Creek"
                                    />
                                </Col>
                                    <Col md={6}>
                                    <LazyImageWithPlaceholder
                                src="./Images/image12.jpg"
                                placeholderSrc="./Images/image12.jpg"
                                alt="Possum Creek"
                                    /></Col>
                                </Row> */}
                            <Row>

                                {/* Keeps aspect ratio, shows placeholder image, fades in */}
                                {/* <LazyImageWithPlaceholder
                                src="./Images/image9.jpg"
                                placeholderSrc="./Images/image9.jpg"
                                alt="Possum Creek"
                                    /> */}
                                </Row>
                            </div>
                    </Container>
                    
                </Container>
            </div>
        );
    }
}

export default AboutDescription;