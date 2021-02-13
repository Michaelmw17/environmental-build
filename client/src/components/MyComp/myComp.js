import React from "react";


const  MyComp = ()  => {
    return <img src={process.env.PUBLIC_URL + '/LogoHomes.png'} alt="Logo" style={{ height: '180px', width: '150px'}}/>;
};

export default MyComp;