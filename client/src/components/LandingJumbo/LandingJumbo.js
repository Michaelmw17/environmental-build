
import React, {Suspense} from 'react';
import { Link } from 'react-router-dom';
// import ButtonHome  from '../ButtonHome/buttonHome'
import Spinner from 'react-bootstrap/Spinner'
import MyComp from '../MyComp/myComp'
import './styles.css'


const Header = () =>{
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
                A Two part sectioned environmental house available to rent in Possum Creek
            </span>
        </div>
    );
}


const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <i className={props.className}></i>
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
        </div>
    )
}

function LandingJumbo() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                {/* <Grid className="landing-grid">
                <Cell col={12} tablet={8}>
                                <Grid className="demo-grid-3"> */}
                                    <div id='body'>
                                                <Header/>
                                                <Card 
                                                    className='section bg-green'
                                                    img='./'
                                                    title='Introduction' 
                                                    description='The location of Possum Creek is renowned for its beauty and handy location to Bangalow and the beaches of Byron Bay. Here you will find a special holiday getaway in a home lovingly constructed using timber and Mt Warning basalt rock. The main "Rosella" house with an outlook to rolling fields. Both accommodation options have access to sparkling clear swimming hole and rainforest pocket.'
                                                        />
                                                
                                                    {/* <ButtonHome/> */}
                                                <Card 
                                                    className='section bg-grey'
                                                    img='./' 
                                                    title='Our Values'
                                                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur.'
                                                            />
                                                    
                                                {/* <Card 
                                                    className='section'
                                                    img='./' 
                                                    title='Our Mission' 
                                                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur.'
                                                /> */}
                                            </div>
                                        {/* </Grid>
                                </Cell>
                            </Grid> */}
                        </div>
                        
        );
    
}

export default LandingJumbo;
