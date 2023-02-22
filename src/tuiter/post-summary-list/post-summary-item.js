import React from "react";
const PostSummaryItem= ({post}) => {
    return(
        <div className="container wd-borderless list-group-item">
            <div className="row wd-borderless align-items-center">
                <div className="col-9 wd-color-black wd-borderless m-0">
                    <p id="article-text" className="wd-text-soft-gray"><b
                        className="wd-text-soft-gray">{post.userName}&nbsp;</b><i
                        className="fa-solid fa-circle-check wd-text-soft-gray wd-inline"></i> - {post.time}</p>
                    <b className="wd-color-black">{post.topic}</b>

                    <p className="wd-text-soft-gray wd-font-arial"><b>{post.title}</b></p>

                </div>
                <div className="col-3 wd-borderless">
                    <image src={post.image}
                           className="wd-article-photo wd-rounded-slight wd-vertical-align float-end m-0"></image>
                </div>

            </div>
        </div>
    );
};
export default PostSummaryItem;