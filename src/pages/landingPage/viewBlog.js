import moment from 'moment'
import React, { useEffect, useState } from 'react'
import AnonymousHeader from '../../component/anonymous_header/anonymousHeader'
import api from '../../utils/api'

export default function ViewBlog(props) {
    const id = props.match.params.id
    const [blogView, setBlogView] = useState({})
    const [onEdit, setOnEdit] = useState(false)

    useEffect(async () => {
        const response = await api.Blog.view(id)
        setBlogView(response)

    }, [])

    return (
        <>
            <AnonymousHeader/>
            <div
                className="page-title-area item-bg2 jarallax"
                data-jarallax='{"speed": 0.3}'
            >
                <div className="container">
                    <div className="page-title-content">
                        <h2>{blogView?.title}</h2>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <section className="blog-details-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details">
                                {/* <div className="article-image">
                                    <img
                                        src="../assets/images/blog.png"
                                        alt="Cover Image"
                                        style={{ width: "100%", height: "50vh" }}
                                    />
                                </div> */}

                                <div className="article-content mt-0">
                                    <div className="entry-meta row">
                                        <span className="text-pink mr-3 col-12 col-md-4">Posted On:
                                            <span className="text-muted ml-1">
                                                {moment(blogView?.createdAt).format("MMMM Do, YYYY")}
                                            </span>
                                        </span>
                                        <span className="text-pink mr-3 col-12 col-md-4">Posted By:
                                            <span className="text-muted ml-1">
                                                {blogView?.author?.firstName}{" "}
                                                {blogView?.author?.lastName}
                                            </span>
                                        </span>
                                        <span className="text-pink float-right col-12 col-md-3">Views:
                                            <span className="text-muted ml-1">{blogView?.views}</span>
                                        </span>
                                    </div>

                                    <h3>{blogView?.title}</h3>

                                    <p
                                        dangerouslySetInnerHTML={{ __html: blogView?.description }}
                                        className="content"
                                    ></p>
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span style={{ color: "#ee0979", cursor: "pointer" }}>
                                            {blogView?.likes > 0 && <i
                                                // onClick={() => likeABlog(blog?.id)}
                                                className="fas fa-thumbs-up"
                                            ></i>}
                                            {!blogView?.likes > 0 && <i
                                                // onClick={() => likeABlog(blog?.id)}
                                                className="far fa-thumbs-up"
                                            ></i>}
                                            &nbsp;
                                            {/* {blog?.likes} */}
                                        </span>
                                        &nbsp;&nbsp;&nbsp;
                                        {/* <span style={{ color: "#ff6a00", cursor: "pointer" }}>
                      {blogView.dislikes > 0 && <i
                        onClick={() => dislikeABlog(blog?.id)}
                        className="fas fa-thumbs-down"
                      ></i>}
                      {!blogView.dislikes > 0 && <i
                        onClick={() => dislikeABlog(blog?.id)}
                        className="far fa-thumbs-down"
                      ></i>}
                      &nbsp;
                      {blog?.dislikes}
                    </span> */}
                                    </div>

                                    {/* <div className="article-share">
                    <ul className="social">
                    <span className="d-flex align-items-end flex-column">
                        <h6 className="title"> Share Via</h6>
                        <span className="d-flex flex-row">
                          <FacebookShareButton
                            style={{
                              padding: 2,
                            }}
                            url={ShareUrl}
                          >
                            <FacebookIcon size={30} round={true} />
                          </FacebookShareButton>

                          <LinkedinShareButton
                            style={{
                              padding: 2,
                            }}
                            url={ShareUrl}
                          >
                            <LinkedinIcon size={30} round={true} />
                          </LinkedinShareButton>


                          <WhatsappShareButton
                            style={{
                              padding: 2,
                            }}
                            url={ShareUrl}
                          >
                            <WhatsappIcon size={30} round={true} />
                          </WhatsappShareButton>

                          <TwitterShareButton
                            style={{
                              padding: 2,
                            }}
                            url={ShareUrl}
                          >
                            <TwitterIcon size={30} round={true} />
                          </TwitterShareButton>
                          
                          <TelegramShareButton
                            style={{
                              padding: 2,
                            }}
                            url={ShareUrl}
                          >
                            <TelegramIcon size={30} round={true} />
                          </TelegramShareButton>
                        </span>
                      </span>
                    </ul>
                  </div> */}
                                </div>
                            </div>

                            <div className="comments-area">
                                <h3 className="comments-title">
                                    {blogView?.comments?.length} Comments:
                                </h3>
                                {/* comment section */}
                                <ol className="comment-list">
                                    {blogView?.comments?.map((comment) => (
                                        <li className="comment">
                                            <article className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        {/* <img
                              src={comment?.authorImage}
                              className="avatar"
                              alt="image"
                            /> */}
                                                        <b className="fn">{comment?.author}</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        <span>
                                                            <time>
                                                                {moment(comment?.createdAt).format(
                                                                    "MMMM Do, YYYY"
                                                                )}
                                                            </time>
                                                        </span>
                                                    </div>
                                                </footer>


                                                <div className="comment-content">
                                                    <p> {comment?.comment} </p>
                                                    {/* {dataInLocal?.accountId === comment?.authorId && (
                          <div>
                          <i
                            type="button"
                            className="fe fe-more-vertical dropdown float-right mt-n6"
                            role="button"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{
                              cursor: "pointer",
                            }}
                          ></i>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <li>
                              {" "}
                              <div
                                className="dropdown-item"
                                // onClick={() => editAComment(comment.id)}
                              >
                                Edit
                              </div>
                            </li>
                            <li
                              className="dropdown-item text-danger"
                              style={{ cursor: "pointer" }}
                            //   onClick={() => deleteAComment(comment.id)}
                            >
                              Delete
                            </li>
                          </ul>
                          </div>
                          )} */}
                                                </div>
                                            </article>
                                        </li>
                                    ))}
                                </ol>

                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Drop a Comment</h3>

                                    <form className="comment-form mb-5">
                                        <p className="comment-form-comment">
                                            <label>Comment</label>
                                            <textarea
                                                // ref={userComment}
                                                name="comment"
                                                id="comment"
                                                cols="45"
                                                rows="2"
                                                maxlength="65525"

                                                required="required"
                                            ></textarea>
                                        </p>
                                        {!onEdit && (
                                            <p className="form-submit">
                                                <input
                                                    //   onClick={createUserComment}
                                                    type="submit"
                                                    name="submit"
                                                    id="submit"
                                                    className="submit"
                                                    value="Post Comment"
                                                />
                                            </p>
                                        )}
                                        {onEdit && (
                                            <p className="form-submit">
                                                <input
                                                    //   onClick={() => onEditCommentClick(currentComment.id)}
                                                    type="submit"
                                                    name="submit"
                                                    id="submit"
                                                    className="submit"
                                                    value="Edit Comment"
                                                />
                                            </p>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
