
export default function PostItem(post) {
    return(`
<div className="wd-div-boxes-bm">
    <i className="wd-3dots-gray wd-move-up">&hellip;</i>
    <div className="wd-bookmark-item">
        <div className="wd-column-left">

            <img src=${post.profileImage}

                 className="wd-profile-photo wd-move-photo1"/>

        </div>

        <div className="wd-column-right wd-white-text-block">
            <p className="wd-text-gray wd-move-up-10"><b className="wd-text-white">${post.userName}</b> ${post.handle} &#183; ${post.time} </p>
            <br/>
            <p className="wd-text-gray wd-move-up-50">${post.caption}
            </p>
            <image src=${post.image} className="wd-article-image"></image>
            <div className="wd-border-article wd-move-up-40"><br/><b className="wd-text-white wd-pad-12 wd-pad-top">${post.title}</b><p className="wd-text-gray wd-pad-12 wd-move-up">
                ${post.content}</p></div>
            <div className="wd-move-up-30">
                <i class="fa-regular fa-comment wd-pad-12 wd-gray-icon"></i></a>
                <i class="fa-solid fa-retweet wd-pad-12 wd-gray-icon"></i>
                <i class="fa-regular fa-heart wd-red wd-pad-12"></i>
                <i class="fa-regular fa-inbox-out wd-gray-icon wd-pad-80-left"></i>
            </div>
        </div>
    </div>

</div>
    
   `);
}