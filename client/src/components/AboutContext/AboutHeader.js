import React from 'react';
import "./styles.css";

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
                <div className='wave -three'>
                </div>
                        <div className='title'>About</div>
                        </div>
                    </div>
    )
}
export default HeaderAbout;