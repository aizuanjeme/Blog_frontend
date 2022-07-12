// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import moment from "moment";
// import Swal from "sweetalert2";
// import "./Blog.css";
// import AnonymousHeader from "../Shared/AnonymousHeader";
// import AccountCreateArea from "../Shared/AccountCreateArea";
// import AnonymousFooter from "../Shared/AnonymousFooter";
// import {
//   loadBlog,
//   loadPublishedBlogs,
//   likeBlog,
//   dislikeBlog,
//   deleteBlog,
//   userPublishedBlog,
// } from "../../store/modules/blog";
// import {
//   createComment,
//   deleteComment,
//   editComment,
//   likeComment,
//   dislikeComment,
// } from "../../store/modules/comment";
// import { API_ROOT } from "../../agent";
// import { loadApprovedAdverts } from "../../store/modules/advert";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import { 
//   FacebookShareButton,
//    FacebookIcon,
//    WhatsappShareButton,
//    WhatsappIcon,
//    TwitterShareButton,
//    TwitterIcon,
//    LinkedinShareButton,
//    LinkedinIcon,
//   TelegramShareButton,
//   TelegramIcon
//  } from "react-share";
// import { CLIENT_URL } from "../../agent";


// const Blog = (props) => {
//   const dispatch = useDispatch();
//   let blog = useSelector((state) => state.blog.blog);
//   const blogId = props.match.params.id;
//   const [dataInLocal, setDataInLocal] = useState({});
//   const [onEdit, setOnEdit] = useState(false);
//   const [currentComment, setCurrentComment] = useState("");


//   const [authorId, setAuthorId] = useState("");

//   let authorblogs = useSelector((state) => state.blog.userPubblogs);

//   console.log({ authorblogs });

//   const [blogView, setBlogView] = useState();
//   const [reloaded, reload] = useState(false);

//   useEffect(() => {
//     dispatch(loadPublishedBlogs(1));
//   }, [dispatch]);

//   const adverts = useSelector((state) => state.advert.adverts);
//   console.log("advertcontent", adverts);
//   useEffect(() => {
//     dispatch(loadApprovedAdverts(1, "blogpage"));
//   }, [dispatch]);

//   useEffect(() => {
//     setBlogView(blog);
//     if (blog?.author.id) {
//       setAuthorId(blog.author.id);
//     }
//     dispatch(loadPublishedBlogs(1));
//     const data = JSON.parse(localStorage.getItem("auth"));
//     setDataInLocal(data);
//   }, [blog]);

//   useEffect(() => {
//     dispatch(loadBlog(blogId));
//     dispatch(loadPublishedBlogs(1));
//   }, [dispatch]);

//   useEffect(() => {
//     if (authorId) {
//       dispatch(userPublishedBlog(authorId, blogId));
//     }
//   }, [authorId]);

//   const userComment = useRef("");

//   console.log({ blog });

//   const deleteABlog = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#754ffe",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(deleteBlog(blogId));
//       }
//     });
//   };

//   const resetView = (c) => {
//     // setBlogView(c);
//     // window.history.pushState(
//     //   {},
//     //   null,
//     //   `${window.location.origin}/blog/${c.id}`
//     // );
//     window.location.href = `${window.location.origin}/blogs/${c.id}`;
//   };

//   const deleteAComment = (commentId) => {
//     dispatch(deleteComment(blog.blogId, commentId));
//     blogView.comments = blog.comments.filter((x) => x.id !== commentId);
//     setBlogView(blogView);
//     reload(!reloaded);
//   };

//   const editAComment = (id) => {
//     const commentToEdit = blogView.comments.find((x) => x.id === id);
//     blogView.comments = blogView.comments.filter((x) => x.id !== id);
//     userComment.current.value = commentToEdit.message;
//     setOnEdit(true);
//     setCurrentComment(commentToEdit);
//     reload(!reloaded);
//   };

//   const onEditCommentClick = (commentId) => {
//     // let blogId = window.location.href.split('/')[5];
//     // blogId = blogId.split('?')[0]
//     const editedComment = currentComment;
//     editedComment.message = userComment.current.value;
//     blogView.comments.push(editedComment);
//     dispatch(editComment(blogId, commentId, userComment.current.value));
//     setOnEdit(false);
//     userComment.current.value = "";
//   };

//   const createUserComment = (e) => {
//     e.preventDefault();
//     // const blogId = window.location.href.split('/')[5];
//     dispatch(createComment(blogId, userComment.current.value));
//     userComment.current.value = "";
//   };

//   const like = (commentId) => {
//     dispatch(likeComment(blog.id, commentId));
//     dispatch(loadBlog(blogId));
//   };

//   const disLike = (commentId) => {
//     dispatch(dislikeComment(blog.id, commentId));
//     dispatch(loadBlog(blogId));
//   };

//   const likeABlog = (blogId) => {
//     dispatch(likeBlog(blogId));
//   };

//   const dislikeABlog = (blogId) => {
//     dispatch(dislikeBlog(blogId));
//   };

//   return (
//     <>
//       <AnonymousHeader />
//       <div
//         className="page-title-area item-bg2 jarallax"
//         data-jarallax='{"speed": 0.3}'
//       >
//         <div className="container">
//           <div className="page-title-content">
//             <h2>Blog</h2>
//             <p>Our Latest Blogs</p>
//           </div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <section className="blog-details-area ptb-70">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 col-md-12">
//               <div className="blog-details">
//                 <div className="article-image">
//                   {blog?.coverImage ? (
//                     <img
//                       src={blog?.coverImage}
//                       alt="Cover Image"
//                       width="100%"
//                     />
//                   ) : (
//                     <img
//                       src="../assets/images/blog.png"
//                       alt="Cover Image"
//                       style={{ width: "100%", height: "50vh" }}
//                     />
//                   )}
//                 </div>

//                 <div className="article-content mt-0">
//                   <div className="entry-meta row">
//                       <span className="text-pink mr-3 col-12 col-md-4">Posted On:
//                         <span className="text-muted ml-1">
//                           {moment(blogView?.createdAt).format("MMMM Do, YYYY")}
//                         </span>
//                       </span>
//                       <span className="text-pink mr-3 col-12 col-md-4">Posted By:
//                         <span className="text-muted ml-1">
//                           {blogView?.author?.firstName}{" "}
//                           {blogView?.author?.lastName}
//                         </span>
//                       </span>
//                       <span className="text-pink float-right col-12 col-md-3">Views:
//                         <span className="text-muted ml-1">{blogView?.views}</span>
//                       </span>              
//                   </div>

//                   <h3>{blogView?.title}</h3>

//                   <p
//                     dangerouslySetInnerHTML={{ __html: blogView?.body }}
//                     className="content"
//                   ></p>
//                 </div>

//                 <div className="article-footer">
//                   <div className="article-tags">
//                     <span style={{ color: "#ee0979", cursor: "pointer" }}>
//                       {blogView.likes > 0 && <i
//                         onClick={() => likeABlog(blog?.id)}
//                         className="fas fa-thumbs-up"
//                       ></i>}
//                       {!blogView.likes > 0 && <i
//                         onClick={() => likeABlog(blog?.id)}
//                         className="far fa-thumbs-up"
//                       ></i>}
//                       &nbsp;
//                       {blog?.likes}
//                     </span>
//                     &nbsp;&nbsp;&nbsp;
//                     <span style={{ color: "#ff6a00", cursor: "pointer" }}>
//                       {blogView.dislikes > 0 && <i
//                         onClick={() => dislikeABlog(blog?.id)}
//                         className="fas fa-thumbs-down"
//                       ></i>}
//                       {!blogView.dislikes > 0 && <i
//                         onClick={() => dislikeABlog(blog?.id)}
//                         className="far fa-thumbs-down"
//                       ></i>}
//                       &nbsp;
//                       {blog?.dislikes}
//                     </span>
//                   </div>

//                   <div className="article-share">
//                     <ul className="social">
//                     <span className="d-flex align-items-end flex-column">
//                         <h6 className="title"> Share Via</h6>
//                         <span className="d-flex flex-row">
//                           <FacebookShareButton
//                             style={{
//                               padding: 2,
//                             }}
//                             url={ShareUrl}
//                           >
//                             <FacebookIcon size={30} round={true} />
//                           </FacebookShareButton>

//                           <LinkedinShareButton
//                             style={{
//                               padding: 2,
//                             }}
//                             url={ShareUrl}
//                           >
//                             <LinkedinIcon size={30} round={true} />
//                           </LinkedinShareButton>


//                           <WhatsappShareButton
//                             style={{
//                               padding: 2,
//                             }}
//                             url={ShareUrl}
//                           >
//                             <WhatsappIcon size={30} round={true} />
//                           </WhatsappShareButton>

//                           <TwitterShareButton
//                             style={{
//                               padding: 2,
//                             }}
//                             url={ShareUrl}
//                           >
//                             <TwitterIcon size={30} round={true} />
//                           </TwitterShareButton>
                          
//                           <TelegramShareButton
//                             style={{
//                               padding: 2,
//                             }}
//                             url={ShareUrl}
//                           >
//                             <TelegramIcon size={30} round={true} />
//                           </TelegramShareButton>
//                         </span>
//                       </span>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="comments-area">
//                 <h3 className="comments-title">
//                   {blogView?.comments.length} Comments:
//                 </h3>
//                 {/* comment section */}
//                 <ol className="comment-list">
//                   {blogView?.comments.map((comment) => (
//                     <li className="comment">
//                       <article className="comment-body">
//                         <footer className="comment-meta">
//                           <div className="comment-author vcard">
//                             <img
//                               src={comment?.authorImage}
//                               className="avatar"
//                               alt="image"
//                             />
//                             <b className="fn">{comment?.author}</b>
//                             <span className="says">says:</span>
//                           </div>

//                           <div className="comment-metadata">
//                             <span>
//                               <time>
//                                 {moment(comment?.createdAt).format(
//                                   "MMMM Do, YYYY"
//                                 )}
//                               </time>
//                             </span>
//                           </div>
//                         </footer>


//                         <div className="comment-content">
//                           <p> {comment?.message} </p>
//                           {dataInLocal?.accountId === comment?.authorId && (
//                           <div>
//                           <i
//                             type="button"
//                             className="fe fe-more-vertical dropdown float-right mt-n6"
//                             role="button"
//                             id="dropdownMenuLink"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             style={{
//                               cursor: "pointer",
//                             }}
//                           ></i>
//                           <ul
//                             className="dropdown-menu"
//                             aria-labelledby="dropdownMenuLink"
//                           >
//                             <li>
//                               {" "}
//                               <div
//                                 className="dropdown-item"
//                                 onClick={() => editAComment(comment.id)}
//                               >
//                                 Edit
//                               </div>
//                             </li>
//                             <li
//                               className="dropdown-item text-danger"
//                               style={{ cursor: "pointer" }}
//                               onClick={() => deleteAComment(comment.id)}
//                             >
//                               Delete
//                             </li>
//                           </ul>
//                           </div>
//                           )}
//                         </div>
//                         </article>
//                     </li>
//                   ))}
//                 </ol>

//                 <div className="comment-respond">
//                   <h3 className="comment-reply-title">Drop a Comment</h3>

//                   <form className="comment-form mb-5">
//                     <p className="comment-form-comment">
//                       <label>Comment</label>
//                       <textarea
//                         ref={userComment}
//                         name="comment"
//                         id="comment"
//                         cols="45"
//                         rows="2"
//                         maxlength="65525"

//                         required="required"
//                       ></textarea>
//                     </p>
//                     {!onEdit && (
//                       <p className="form-submit">
//                         <input
//                           onClick={createUserComment}
//                           type="submit"
//                           name="submit"
//                           id="submit"
//                           className="submit"
//                           value="Post Comment"
//                         />
//                       </p>
//                     )}
//                     {onEdit && (
//                       <p className="form-submit">
//                         <input
//                           onClick={() => onEditCommentClick(currentComment.id)}
//                           type="submit"
//                           name="submit"
//                           id="submit"
//                           className="submit"
//                           value="Edit Comment"
//                         />
//                       </p>
//                     )}
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;
