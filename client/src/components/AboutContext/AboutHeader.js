import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import "./styles.css";

const MyComp = lazy(() => import('../MyComp/myComp'));

const  HeaderAbout = ()  => {
    return (
         <div className="centerHeader" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div className='box'>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'><Link to="/" >
                        <Suspense fallback={
                            <Spinner animation="border" />
                        }>
                                <MyComp /> 
                                </Suspense>
                            </Link> </div>
                        <div className='title'>About</div>
                        </div>
                    </div>
    )
}
export default HeaderAbout;