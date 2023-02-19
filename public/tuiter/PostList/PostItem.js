
export default function PostItem(post) {
    return(`
<div class="wd-div-boxes-bm">
    <i class="wd-3dots-gray wd-move-up">&hellip;</i>
    <div class="wd-bookmark-item">
        <div class="wd-column-left">

            <img src=${post.profileImage}

                 class="wd-profile-photo wd-move-photo1"/>

        </div>

        <div class="wd-column-right wd-white-text-block">
            <p class="wd-text-gray wd-move-up-10"><b class="wd-text-white">${post.userName}</b> ${post.handle} &#183; ${post.time} </p>
            <br/>
            <p class="wd-text-gray wd-move-up-50">${post.caption}
            </p>
            <image src=${post.image} class="wd-article-image"></image>
            <div class="wd-border-article wd-move-up-40"><br/><b class="wd-text-white wd-pad-12 wd-pad-top">${post.title}</b><p class="wd-text-gray wd-pad-12 wd-move-up">
                ${post.content}</p></div>
            <div class="wd-move-up-30">
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