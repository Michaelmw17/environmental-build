import React from 'react';

// import Spinner from 'react-bootstrap/Spinner', { lazy, Suspense }
import "./style.css";

// const MyComp = lazy(() => import('../MyComp/myComp'));

const  HeaderBrandDescription = ()  => {
    return (
         <div className="centerHeader" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div className='box'>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'>
                        {/* <Suspense fallback={
                            <Spinner animation="border" />
                        }>
                                <MyComp /> 
                                </Suspense> */}
                             </div>
                        <div className='title'> Enquire</div>
                        </div>
                    </div>
    )
}
export default HeaderBrandDescription;