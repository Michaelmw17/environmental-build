
import React from 'react';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "./style.css";

import { Button, Icon } from 'semantic-ui-react'
const words = ['Hinterland getaways in spectacular location 495 Friday Hut Road, Possum Creek', 'Two accommodation options available', 'Main "Rosella" house 3 bedrooms', 'Flat "Bluebird" house 1 bedroom self-contained unit', 'Rustic clay tennis court', ' Set on rainforest pocket ', 'Plentiful water supply','Vegetable garden', 'Wildlife - Koalas, Platypus, Wallabies', 'Close to Bangalow and Byron Bay'];
const items = words.map((word, e) => {
    return <li key={e}>{word}</li>;
});

const  SideDescription = ()  => {
        return (
            <div className="FormHeader">
                <Container>
                    <Row>
                        <div className="FormFinePrint">
                            <Col md={12}>
                                    <ul> {items} </ul>
                                </Col>
                                        <p> 
                                The location of Possum Creek is renowned for its beauty and handy location to Bangalow and the beaches of Byron Bay. Here you will find a special holiday getaway in a home lovingly constructed using timber and Mt Warning basalt rock. The main "Rosella" house with an outlook to rolling fields. Both accommodation options have access to sparkling clear swimming hole and rainforest pocket.
                                        </p>
                            <Col md={12}>
                              
                                <Button  animated  inverted color='teal' href='./about'>
                                <Button.Content  visible>Photo Gallery</Button.Content>
                                <Button.Content  hidden  href='./about'>
                                    <Icon  name='arrow right' />
                                        </Button.Content>
                                        
                                    </Button>
                                
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        );
}

export default SideDescription;