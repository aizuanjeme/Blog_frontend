import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./anonymousHeader.css";
import api from "../../utils/api";

const AnonymousHeader = () => {
const history = useHistory()
    const logout = () => {
        api.Account.logout();
        window.location.reload();
        history("/")
    };

    const authenticated = api.Account.isAuth();


    return (
        <div className="anonymous-header d-flex flex-column">
            <div className="navbar-area ">
                <div className="luvion-nav">
                    <div className="container">
                        {/* Small-Screen */}
                        <div class="fixed-top small-screen">
                            <nav class="navbar navbar-expand-md pb-2 bg-primary navbar-dark">
                                <a class="navbar-brand ml-1" href="index.html" style={{ marginTop: "4px" }}>
                                    {/* <AppLogo />
                                    <img src="assets/img/logo-small.png" alt="logo" style={{width: "40px"}} /> */}
                                </a>
                                <button
                                 
                                    class="navbar-toggler rounded-0"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapsibleNavbar"
                                    id="closeButton"
                                >
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </nav>
                            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                <div class="bg-primary p-4">
                                    <ul className="navbar-nav">
                                        <li className="nav-item border-top">
                                            <Link to="/" className="nav-link text-light font-weight-bold">Blogs</Link>
                                        </li>

                                        {/* <li className="nav-item border-top">
                                            <Link to="/events/active" className="nav-link text-light font-weight-bold">Events</Link>
                                        </li>

                                        <li className="nav-item border-top">
                                            <Link
                                                to="/landingpage/JobsList"
                                                className="nav-link text-light font-weight-bold"
                                            >
                                                Jobs
                                            </Link>
                                        </li>


                                        <li className="nav-item border-top">
                                            <a
                                                href="contact.html"
                                                className="nav-link text-light font-weight-bold"
                                            >
                                                Contact
                                            </a>
                                        </li> */}

                                        {authenticated && <li className="nav-item border-top py-2">
                                            <Link onClick={logout} className="login-btn text-light font-weight-bold">
                                                Log Out</Link>
                                        </li>}

                                        {!authenticated && <li className="nav-item border-top">
                                            <Link to="/login" className="login-btn text-light font-weight-bold">
                                                Log In</Link>
                                        </li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End-Small-Screen --> */}

                        {/* Main-Screen */}
                        <nav className="navbar navbar-expand-md navbar-light main-screen pt-1">
                            <a className="navbar-brand" href="index.html" id="betalogo">
                                <img src="assets/img/logo.png" alt="logo" />
                                <img src="assets/img/black-logo.png" alt="logo" />
                                {/* <span className="badge badge-warning text-white" id="beta">BETA</span> */}
                            </a>

                            <div
                                className="collapse navbar-collapse mean-menu"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">
                                            Blogs
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link to="/events/active" className="nav-link">
                                            Events
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="/landingpage/JobsList"
                                            className="nav-link"
                                        >
                                            Jobs
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            href="#aboutUs"
                                            className="nav-link"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="#features"
                                            className="nav-link"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#contactUs" className="nav-link">
                                            Contact
                                        </a>
                                    </li> */}
                                </ul>

                                {authenticated && (
                                    <div className="others-options">
                                        <span
                                            onClick={logout}
                                            className="login-btn"
                                            style={{ cursor: "pointer" }}
                                        >
                                            {/* <i className="flaticon-user"></i> */}
                                            Log Out
                                        </span>
                                    </div>
                                )}

                                {!authenticated && (
                                    <div className="others-options">
                                        <Link to="/login" className="login-btn">
                                            {/* <i className="flaticon-user"></i> */}
                                            Log In
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </nav>
                        {/* End-Main-Screen */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnonymousHeader;
