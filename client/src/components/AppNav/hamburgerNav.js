
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import React from 'react';
import "./style.css"

const SideBarNav = ()  => {
    return (
        <Menu>
            
                    <Link className="menu-item" to="/">
                        Home
                    </Link>
                                <hr className="sidebar-divider d-none d-md-block" />
                    <Link className="menu-item" to="/about">
                        About
                    </Link>
                                <hr className="sidebar-divider d-none d-md-block" />
                    <Link className="menu-item" to="/enquire">
                        Enquire
                    </Link>
                                <hr className="sidebar-divider d-none d-md-block" />
                    <Link className="menu-item" to="/locations">
                    Location
                    </Link>
                                <hr className="sidebar-divider d-none d-md-block" />
                    <Link className="menu-item" to="/userProfile"  >
                    Profile
                    </Link>
                                    <hr className="sidebar-divider d-none d-md-block" />
                    <Link  className="menu-item" to="/login">
                    Login
                    </Link>
            <p className="signIn">Please Login in <br></br>to enquire your stay</p>
        </Menu>
        );
    };

    export default SideBarNav;