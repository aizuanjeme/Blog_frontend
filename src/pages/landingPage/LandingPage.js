import React, { useState, useEffect} from 'react'
import api from '../../utils/api';
import './LandingPage.css';

export default function LandingPage() {
const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        const loadBlogs = async () => {
            const response = await api.Blog.load();
            const count = response.data.totalCount;
            setBlogs(response.data.data);
        };
        loadBlogs();   
    }, []);
console.log({blogs})
    return (
        <>
            <div className="main-banner jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <h1>Be Motivated</h1>
                                {/* <p>Connecting you to great minds and giving you insights to build, and grow your business.</p> */}
                                <a href="#" className="btn btn-primary">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="services-area ptb-70">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-md-12 stretch-card">
                            {/* <div className="card">
                                <div className="card-body"> */}
                                <div className=" col-md-8 mx-auto mt-3">
                                {blogs && blogs.length > 0 && blogs?.map((blog, index) => 
                                <div className="">
                                         <h1>{blog.title}</h1> <br/>
                                         <h4>{blog.description}</h4>  
                                            
                                        </div>
                                 )}
                                    </div>
                                {/* </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
