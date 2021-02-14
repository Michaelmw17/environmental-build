import React from 'react';
import SideBarNav from '../../../components/AppNav/hamburgerNav';
import ContactForm from '../../../components/Form/email'
import HeaderBrandDescription from '../../HeaderEnquire/HeaderBrand'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer'


class enquire extends React.Component {
render() {  
    return (
      <div className="landing-grid-about">
        <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <Navbar />
        <div className="FormHeader">
          <HeaderBrandDescription/>
          <ContactForm />
                <Footer/>
                </div>
            </div>
    );
    }
}

export default enquire;
// dates dont work below 350