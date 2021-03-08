
import React, {Suspense} from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import MyComp from '../MyComp/myComp'
import { useAppContext } from '../../store';
import ButtonBases from '../ButtonHome/buttonHome'
import { Zoom } from "react-awesome-reveal";

import "./stylesHeader.css";
import { Container } from 'react-bootstrap';

const Header = () => {
    const [state] = useAppContext();
    return(       <Zoom left>
         <Container  fluid>
        <div className='header'>
            <span className='header-title'>
                <Link to="/" >
                <Suspense fallback={
                            <Spinner animation="border" />
                            }>
                                <MyComp /> 
                    </Suspense>
                </Link>
            </span>
            <br/>
            <span className="header-text">
                        <h1>
                        Welcome {state.user.first_name} {state.user.last_name}
                        </h1>
                        Please Sign in/Register  to enquire about your next stay!
                    </span>
            </div>
        </Container>
        </Zoom>
    );
}

const Card = (props) => {
    return (
        <Container  fluid>
        <div className={props.className} >
            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br />
                <span>
                    {props.description}
                </span>
            </div>
            </div>
        </Container>
    )
};

const CardBlue = (props) => {
    return (
         <Container  fluid>
        <div className={props.className} >
            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
            </div>
        </Container>
    )
}


const HeaderCard = (props) => {
    return (
         <Container  fluid>
        <div className={props.className} >
            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
            </div>
        </Container>
    )
}

function LandingJumbo() {
    const [state] = useAppContext();

    console.log({state});
    return (
            <Zoom left>
            <div style={{width: '100%', margin: 'auto'}}>
                <div id='body'>
                    <Header />
                    <div className='ButtonBases'>
                        <ButtonBases />
                        </div>
                            <HeaderCard 
                                className='section bg-green'
                                title='Introduction' 
                                description='The location of Possum Creek is renowned for its beauty and handy location to Bangalow and the beaches of Byron Bay. Here you will find a special holiday getaway in a home lovingly constructed using timber and Mt Warning basalt rock. The main "Rosella" house with an outlook to rolling fields. Both accommodation options have access to sparkling clear swimming hole and rainforest pocket.'
                                />
                            <Card 
                                className='section bg-grey'
                                title='Rosella - 3 Bed'
                                description='Main house has 3 bedrooms with loft. Access to sparkling swimming hole and rustic tennis court. NBN, solar, drinking water filtered from tank. Maximum 6 people with minimum 2 night stay.
                                '/>
                                <CardBlue 
                                className='section bg-grey-second'
                                title='Bluebird - 1 Bed'
                                description='Self contained has 1 bedrooms with access to sparkling swimming hole. NBN, drinking water filtered from tank. Maximum 2 people with minimum 2 night stay.
                                '/>
                    </div>
        </div>
        </Zoom>
        );
    
}

export default LandingJumbo;
