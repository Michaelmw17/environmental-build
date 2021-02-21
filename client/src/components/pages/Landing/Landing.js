import React, {Suspense} from 'react';
import Footer from '../../Footer'
import { lazy } from '@loadable/component'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LandingJumbo = lazy(() => import('../../LandingJumbo/LandingJumbo'), {
    fallback: <div><Loader type="Rings"
        color="#00BFFF"
        timeout={9000}
        height={80} width={80} /></div>
})

function DashBoard() {
    return (<div>
        <div className="pl-0 container landing">
            <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                <LandingJumbo />
            </Suspense>
        </div>
        <Footer />
        </div>
    );
}

export default DashBoard;

