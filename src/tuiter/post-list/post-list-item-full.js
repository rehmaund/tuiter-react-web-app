import React from "react";

const PostListItemFull = ({fullpost}) => { return(

    <div className="wd-div-boxes-bm">
        <i className="wd-3dots-gray wd-move-up wd-inline">&hellip;</i>
        <div className="wd-bookmark-item wd-move-up-40">
            <div className="wd-column-left">

                <img src={fullpost.profileImage}

                     className="wd-profile-photo wd-move-photo1 wd-move-up-5 wd-inline"/>

            </div>

            <div className="wd-column-right wd-white-text-block">
                <p className="wd-text-gray"><b className="wd-text-gray">{fullpost.userName}&nbsp;<i
                    className="fa-solid fa-circle-check text-primary"></i></b> {fullpost.handle} &#183; {fullpost.time} </p>

                <p className="wd-text-gray wd-move-up-20">{fullpost.caption}
                </p>
                <img src={fullpost.image} className="wd-article-image me-2 mt-2 wd-div-boxes-bm"></img>

                <div className="me-2 wd-border-article wd-div-boxes-bm wd-move-up-40 wd-fullpost-font p-2"><b className="wd-text-gray wd-post-font m-1 mt-4">{fullpost.title}</b><p className="wd-text-soft-gray d-post-font m-1">
                    {fullpost.content}</p>
                    <p className="wd-text-gray">&#x1F517;&nbsp;{fullpost.link}</p>
            </div>
            <div className="row wd-move-up-30 wd-likes-font wd-text-soft-gray mt-0">
                <div className="col-3">
                    <i className="fa-regular fa-comment wd-gray-icon wd-pad-12 wd-inline"></i>{fullpost.numComments}</div>
                <div className="col-3">
                    <i className="fa-solid fa-retweet wd-gray-icon wd-pad-12"></i>{fullpost.numRetuits}</div>
                <div className="col-3">
                    <i className="fa-regular fa-heart wd-gray-icon wd-pad-12"></i>{fullpost.numLikes}</div>
                <div className="col-3">
                    <i className="fa-solid fa-arrow-up-from-bracket wd-gray-icon wd-pad-12"></i></div>

                <br/><br/>
                <p className="text-primary">Show this thread</p>

            </div>


        </div>
    </div>
    </div>


)};

export default PostListItemFull;