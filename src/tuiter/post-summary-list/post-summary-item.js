import React from "react";
const PostSummaryItem= ({post}) => {
    return(
        <div className="container wd-borderless list-group-item">
            <div className="row wd-borderless align-items-center">
                <div className="col-9 wd-color-black wd-borderless m-0">
                    <p id="article-text" className="wd-text-gray">{post.userName}&nbsp;<i
                        className="fa-solid fa-circle-check wd-text-gray wd-inline"></i> - {post.time}</p>
                    <b className="wd-color-black">{post.topic}</b>

                    <p className="wd-text-gray wd-font-arial">{post.title}</p>

                </div>
                <div className="col-3 wd-borderless">
                    <img src={post.image}
                           className="wd-article-photo wd-rounded-slight wd-vertical-align float-end m-0"></img>
                </div>

            </div>
        </div>
    )
};
export default PostSummaryItem;