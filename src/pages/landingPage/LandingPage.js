import React, { useState, useEffect } from 'react'
import api from '../../utils/api';
import moment from "moment";
import { Link } from "react-router-dom";
import { addThreeDots } from '../../utils/converter';
import './LandingPage.css';
import AnonymousHeader from '../../component/anonymous_header/anonymousHeader';

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

  console.log({ blogs })
  return (
    <>
    <AnonymousHeader/>
      <div
        className="page-title-area item-bg2 jarallax"
        data-jarallax='{"speed": 0.3}'
      >
        <div className="container">
          <div className="page-title-content text-center">
            <h2 >Blog</h2>
            <p>Our Latest Blogs</p>
            {blogs?.length >= 1 && (
              <p className="text-center ">
                <input
                  class="form-control rounded-pill"
                  type="text"
                  placeholder="search blogs"
                // onChange={(event) => doSearch(event.target.value)}
                />
              </p>
            )}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <section className="blog-area ptb-70">
        <div className="container">
          <div className="row">
            {blogs &&
              blogs?.length > 0 &&
              blogs.map((blog, index) => {
                return <>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-blog-post">
                      <div className="blog-image">
                        <Link to={`/blog/${blog.id}`}>
                          <img
                            src="../assets/images/blog.png"
                            alt="Cover Image"
                            style={{ width: "100%", height: "200px" }}
                          />
                        </Link>

                        <div className="date">
                          <i className="far fa-calendar-alt"></i>{" "}
                          {moment(blog?.createdAt).format("MMMM Do, YYYY")}
                        </div>
                      </div>

                      <div className="blog-post-content">
                        <h5 className="mb-n4">
                          <Link to={`/blog/${blog.id}`}>{blog?.title}</Link>
                        </h5>

                        <span>
                          {blog?.author?.firstName && (
                            <strong style={{ fontSize: "0.7rem" }}>
                              By: {blog?.author?.firstName}{" "}
                              {blog?.author?.lastName}
                            </strong>
                          )}
                        </span>

                        <h6
                          dangerouslySetInnerHTML={{
                            __html: addThreeDots(blog?.description, 150),
                          }}
                          style={{ fontSize: "1rem", lineHeight: "1" }}
                        ></h6>

                        <Link to={`/blog/${blog.id}`} className="read-more-btn">
                          Read More <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              })}
            {blogs?.length > 1 && (
              <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <a href="#" className="prev page-numbers">
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                  <a href="#" className="page-numbers">
                    1
                  </a>
                  <span className="page-numbers current" aria-current="page">
                    2
                  </span>
                  <a href="#" className="page-numbers">
                    3
                  </a>
                  <a href="#" className="page-numbers">
                    4
                  </a>
                  <a href="#" className="next page-numbers">
                    <i className="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            )}
          </div>

          {blogs?.length === 0 && (
            <div className="text-pink font-weight-bold">No Blogs Found</div>
          )}
        </div>
      </section>
    </>
  )
}
