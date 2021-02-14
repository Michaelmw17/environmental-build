
import React, {Suspense} from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import MyComp from '../MyComp/myComp'
import './styles.css'
import { useAppContext } from '../../store';
import { Button, Icon } from 'semantic-ui-react'

const Header = () => {
    const [state] = useAppContext();
    return(
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
                
                    Double sectioned environmental house available for your next getaway in Possum Creek
            
            </span>
        </div>
    );
}


const Card = (props) => {
        

    return(
        <div className={props.className} >
            <div className="small-div">
                <img src={props.img} alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
            <Button  animated  inverted color='teal'  style={{marginBottom:'30px'}}>
                <Button.Content  visible>More Info/Gallery</Button.Content>
                <Button.Content  hidden  href='./about'>
                <Icon  name='arrow right' />
                </Button.Content>
            </Button>
        </div>
    )
}

const CardBlue = (props) =>{
    return(
        <div className={props.className} >
            <div className="div-blue">
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
            <Button  animated  inverted color='teal'  style={{marginBottom:'30px'}}>
                <Button.Content  visible>More Info/Gallery</Button.Content>
                <Button.Content  hidden  href='./about'>
                <Icon  name='arrow right' />
                </Button.Content>
            </Button>
        </div>
    )
}


const HeaderCard = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <img src={props.img} alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
                <Button  animated  inverted color='olive' href='./about' style={{marginBottom:'30px'}} >
                        <Button.Content  visible>Enquire</Button.Content>
                            <Button.Content  hidden  href='./enquire'>
                                <Icon  name='arrow right' />
                        </Button.Content>
                </Button>
        </div>
    )
}

function LandingJumbo() {
    const [state] = useAppContext();

    console.log({state});
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <div id='body'>
                    <Header />
                            <HeaderCard 
                                className='section bg-green'
                                img='./'
                                title='Introduction' 
                                description='The location of Possum Creek is renowned for its beauty and handy location to Bangalow and the beaches of Byron Bay. Here you will find a special holiday getaway in a home lovingly constructed using timber and Mt Warning basalt rock. The main "Rosella" house with an outlook to rolling fields. Both accommodation options have access to sparkling clear swimming hole and rainforest pocket.'
                                    />
                            <Card 
                                className='section bg-grey'
                                img='./' 
                                title='Rosella - 3 Bed'
                                description='Main house has 3 bedrooms with loft. Access to sparkling swimming hole and rustic tennis court. NBN, solar, drinking water filtered from tank. Maximum 6 people with minimum 2 night stay.
                                '
                                />
                                <CardBlue 
                                className='section bg-grey-second'
                                img='./' 
                                title='Bluebird - 1 Bed'
                                description='Self contained has 1 bedrooms with access to sparkling swimming hole. NBN, drinking water filtered from tank. Maximum 2 people with minimum 2 night stay.
                                '
                                />
                    </div>
            </div>
                        
        );
    
}

export default LandingJumbo;
