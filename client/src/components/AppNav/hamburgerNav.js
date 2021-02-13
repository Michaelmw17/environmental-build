
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import React from 'react';
import "./style.css"

const SideBarNav = ()  => {
    return (
        // Pass on our props
        <Menu>
                    <Link className="menu-item" to="/">
                        Home
                    </Link>
                          {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />
                    <Link className="menu-item" to="/about">
                        About
                    </Link>
                          {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />
                    <Link className="menu-item" to="/enquire">
                        Enquire
                    </Link>
                          {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />
                    <Link className="menu-item" to="/locations">
                Location
                    </Link>
                      {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />
                    <Link className="menu-item" to="/dashboard">
                Dashboard
                    </Link>
                        {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />
                    <Link className="menu-item" to="/profile"  >
                Profile
                    </Link>
                    {/* Divider */}
                                    <hr className="sidebar-divider d-none d-md-block" />
                    <Link  className="menu-item" to="/other">
                Other
                    </Link>
                    {/* Divider */}
                                    <hr className="sidebar-divider d-none d-md-block" />
                    <Link  className="menu-item" to="/login">
                Login
                    </Link>
            
        </Menu>
        );
    };

    export default SideBarNav;