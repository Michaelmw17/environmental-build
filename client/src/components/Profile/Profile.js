import React, {Suspense} from 'react';
import { useAppContext } from '../../store';
// import SideBarNav from '../AppNav/hamburgerNav';
import Footer from '../Footer'
import Spinner from 'react-bootstrap/Spinner'
import MyComp from '../MyComp/myComp'
import { Card, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './styles.css'
function Profile() {
    const [authState] = useAppContext();

    return (
        <div className="pl-0 m-0 container-fluid profile">
            {/* <SideBarNav pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
            {/* <Sidebar /> */}
            <div className="flex-row-reverse mt-5 mr-6 d-flex">
                <div className="col-xs-12 col-sm-12 col-md-12  ">
                    <div className="mx-auto col-sm-12">
                        
                    <div className="ProfileEco">
                        <Link to="/" >
                            <Suspense fallback={
                                        <Spinner animation="border" />
                                        }>
                                            <MyComp /> 
                                </Suspense>
                            </Link>
                            <h1 className="text-center">Eco Profile</h1>
                        </div>
                    </div>
                    <Table className="table mx-auto col-md-6 col-sm-4" style={{borderRadius:"60px"}}>
                        <Card className="CardProfile">
                        <tbody className="info" >
                            <tr>
                                <td>First Name</td>
                                <td>{authState.user.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{authState.user.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{authState.user.email}</td>
                            </tr>
                            </tbody>
                            </Card>
                    </Table>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Profile;
