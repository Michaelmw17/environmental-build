import React from 'react';
import "./styles.css";

import { Zoom } from "react-awesome-reveal";
const  HeaderAbout = ()  => {
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
                </div>
                        <div className='title'>About</div>
                        </div>
            </div>
        </Zoom>
    )
}
export default HeaderAbout;