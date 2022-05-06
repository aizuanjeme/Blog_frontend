import React from 'react'
import './LandingPage.css';

export default function LandingPage() {
  return (
    <>
    <div className="main-banner jarallax" data-jarallax='{"speed": 0.3}'>
        <div className="d-table">
            <div className="d-table-cell">
                <div className="container">
                    <div className="main-banner-content">
                        <h1>KAPSUUL</h1>
                        <p>Connecting you to great minds and giving you insights to build, and grow your business.</p>
                        <a href="#" className="btn btn-primary">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="featured-boxes-area">
        <div className="container">
            <div className="featured-boxes-inner">
                <div className="row m-0">
                    <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div className="single-featured-box">
                            <div className="icon color-fb7756">
                                <i className="flaticon-piggy-bank"></i>
                            </div>

                            <h3>Collaboration</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div className="single-featured-box">
                            <div className="icon color-facd60">
                                <i className="flaticon-data-encryption"></i>
                            </div>

                            <h3>Fully Professional</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div className="single-featured-box">
                            <div className="icon color-1ac0c6">
                                <i className="flaticon-wallet"></i>
                            </div>

                            <h3>Instant Messaging</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div className="single-featured-box">
                            <div className="icon">
                                <i className="flaticon-shield"></i>
                            </div>

                            <h3>Safe and Secure</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="services-area ptb-70">
        <div className="container-fluid p-0">
            <div className="overview-box">
                <div className="overview-content">
                    <div className="content left-content">
                        <h2>About KAPSUUL</h2>
                        <div className="bar"></div>
                        <p>KAPSUUL helps pharmacists, and pharmaceutical organizations bring their teams together in a frictionless environment to get more done. Our easy, reliable cloud platform for video, voice, content sharing, and chat runs across mobile devices and desktops.
                            <br/>
                            <br/>
                            It also has exciting features for easy collaboration and ability to do much more by giving organisations opportunity to advertise their products, engage services of other professionals, organise seminars and basic discussion forums.
                            <br/>
                            <br/>
                            KAPSUUL is powered by GleanForte Academy Limited in collaboration with Netop Business Consulting Limited.</p>
                        <a href="#" className="btn btn-primary">Read More</a>

                    </div>
                </div>

                <div className="overview-image">
                    <div className="image">
                        <img src="assets/img/1.png" alt="image"/>

                        <div className="circle-img">
                            <img src="assets/img/circle.png" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="features-section ptb-70 bg-f7fafd">
        <div className="container">
            <div className="section-title">
                <h2>Key Features</h2>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                    <div className="features-box-list">
                        <div className="row">
                            <div className="col-lg-12 col-sm-6 col-md-6">
                                <div className="features-box">
                                    <div className="icon">
                                        <i className="flaticon-settings"></i>
                                    </div>

                                    <h3>Interactive Dashboard</h3>
                                </div>
                            </div>

                            <div className="col-lg-12 col-sm-6 col-md-6">
                                <div className="features-box">
                                    <div className="icon bg-f78acb">
                                        <i className="flaticon-envelope-of-white-paper"></i>
                                    </div>

                                    <h3>Notifications</h3>
                                </div>
                            </div>

                            <div className="col-lg-12 col-sm-6 col-md-6">
                                <div className="features-box">
                                    <div className="icon bg-cdf1d8">
                                        <i className="flaticon-menu"></i>
                                    </div>

                                    <h3>Product Search</h3>
                                </div>
                            </div>

                            <div className="col-lg-12 col-sm-6 col-md-6">
                                <div className="features-box">
                                    <div className="icon bg-c679e3">
                                        <i className="flaticon-info"></i>
                                    </div>

                                    <h3>Professional Discussions</h3>
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-6 col-md-6">
                                <div className="features-box">
                                    <div className="icon bg-cdf1d8">
                                        <i className="flaticon-menu"></i>
                                    </div>

                                    <h3>Conferencing</h3>
                                </div>
                            </div>

                            <div className="col-lg-12 col-sm-6 col-md-6">
                                <div className="features-box">
                                    <div className="icon bg-c679e3">
                                        <i className="flaticon-info"></i>
                                    </div>

                                    <h3>News & Comments</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7 col-md-12">
                    <div className="features-image">
                        <img src="assets/img/features-img1.png" alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}
