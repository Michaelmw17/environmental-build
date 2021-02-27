import React, {lazy, Suspense} from 'react';
import SideBarNav from '../../../components/AppNav/hamburgerNav';
import HeaderBrandDescription from '../../HeaderEnquire/HeaderBrand'
import Footer from '../../Footer'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import NavBar from '../../Navbar/Navbar'

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
      <div>
      <div className="landing-grid-about">
        <NavBar/>
        <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className="FormHeader">
            <HeaderBrandDescription />
          <Suspense fallback={<div>
                  <Loader
                    type="Rings"
                    color="#00BFFF"
                    height={80}
                    width={80} />
                  </div>}>
                    <ContactForm />
                </Suspense>
                <Footer/>
                </div>
            </div>
      </div>
    );
    }
}

export default enquire;