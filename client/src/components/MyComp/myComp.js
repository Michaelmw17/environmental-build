import React, { Suspense } from "react";

import Spinner from 'react-bootstrap/Spinner';



const  MyComp = ()  => {
    return<Suspense fallback={
                            <Spinner animation="border" />
                            }><img src={process.env.PUBLIC_URL + '/EcoGetawayLogo.jpg'} alt="Logo" style={{ height: '180px', width: '150px'}}/></Suspense> ;
};


export default MyComp;