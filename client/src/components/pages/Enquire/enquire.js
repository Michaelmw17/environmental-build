import React from 'react';
// import Pulse from 'react-reveal/Pulse';
import SideBarNav from '../../../components/AppNav/hamburgerNav';
// import FormContact from '../../../components/Form/form'
import ContactForm from '../../../components/Form/email'
import HeaderBrandDescription from '../../HeaderEnquire/HeaderBrand'
// import BrandDescription from '../../../components/BrandDescription/BrandDescription'
// import Navbar from '../../Navbar/Navbar'
// import Fade from 'react-reveal/Fade';

import "./style.css";



class enquire extends React.Component {
render() {  
    return (
      <div className="landing-grid-about">
        <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
          {/* <Navbar /> */}
        <div className="FormHeader">
          <HeaderBrandDescription/>
          {/* <Container> */}
          {/* <FormContact/> */}
              <ContactForm />
          {/* </Container> */}
                
                
                </div>
            </div>
    );
    }
}

export default enquire;