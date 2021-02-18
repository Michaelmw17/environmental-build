import React, {lazy, Suspense} from 'react';
import SideBarNav from '../../../components/AppNav/hamburgerNav';
// import ContactForm from '../../../components/Form/email'
import HeaderBrandDescription from '../../HeaderEnquire/HeaderBrand'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ContactForm = lazy(() => import('../../../components/Form/email'), {
  fallback: <div><Loader
    type="Rings"
    color="#00BFFF"
     timeout={6000}
    height={80} width={80} /></div>
})

class enquire extends React.Component {
render() {  
    return (
      <div className="landing-grid-about">
        <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <Navbar />
        <div className="FormHeader">
          <HeaderBrandDescription />
          <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                    <ContactForm />
                </Suspense>
          
            {/* <ContactForm /> */}
                <Footer/>
                </div>
            </div>
    );
    }
}

export default enquire;
// dates dont work below 350