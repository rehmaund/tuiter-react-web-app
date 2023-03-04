import React from "react";
const PostListItem = ({fullpost}) => { return (
    <div className="wd-div-boxes-bm">
        <i className="wd-3dots-gray wd-move-up wd-inline">&hellip;</i>
        <div className="wd-bookmark-item wd-move-up-40">
            <div className="wd-column-left">

                <img src={fullpost.profileImage}

                     className="wd-profile-photo wd-move-photo1 wd-move-up-5 wd-inline"/>

            </div>

            <div className="wd-column-right wd-white-text-block wd-borderless">
                <p className="wd-text-gray"><b
                    className="wd-text-black">{fullpost.userName}</b> &nbsp;<i
                    className="fa-solid fa-circle-check text-primary"></i> {fullpost.handle} &#183; {fullpost.time} </p>

                <p className="wd-text-gray wd-move-up-20 pe-2">{fullpost.caption}
                </p>
                <img src={fullpost.image} className="wd-article-image-2 me-2 mt-2"></img>

                <div className="row wd-move-up-30 wd-likes-font wd-text-gray mt-0">
                    <div className="col-3">
                        <i className="fa-regular fa-comment wd-gray-icon wd-pad-12 wd-inline"></i>{fullpost.numComments}
                    </div>
                    <div className="col-3">
                        <i className="fa-solid fa-retweet wd-gray-icon wd-pad-12"></i>{fullpost.numRetuits}</div>
                    <div className="col-3">
                        <i className="fa-regular fa-heart wd-gray-icon wd-pad-12"></i>{fullpost.numLikes}</div>
                    <div className="col-3">
                        <i className="fa-solid fa-arrow-up-from-bracket wd-gray-icon wd-pad-12"></i></div>

                    <br/><br/>
                    <p className="text-primary">Show this thread</p>
                    <br/>
                    <br/>
                </div>


            </div>


        </div>



    </div>
)};

export default PostListItem;