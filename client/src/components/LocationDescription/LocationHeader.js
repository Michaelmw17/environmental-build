import React from 'react';

const  HeaderLocation = ()  => {
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
                    {/* <Link to="/" >
                        <Suspense fallback={
                            <Spinner animation="border" />
                        }>
                                <MyComp /> 
                                </Suspense>
                    </Link> */}
                        </div>
                        <div className='title'>Location</div>
                        </div>
                    </div>
    )
}
export default HeaderLocation;