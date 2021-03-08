import React from 'react';
import { Zoom } from "react-awesome-reveal";
import "./style.css";

const  HeaderBrandDescription = ()  => {
    return (
        <Zoom left>
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
                </Zoom>
    )
}
export default HeaderBrandDescription;