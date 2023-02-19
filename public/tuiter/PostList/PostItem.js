
export default function PostItem(post) {
    return(`
<div class="wd-div-boxes-bm">
    <i class="wd-3dots-gray wd-move-up wd-inline">&hellip;</i>
    <div class="wd-bookmark-item wd-move-up-40">
        <div class="wd-column-left">

            <img src=${post.profileImage}

                 class="wd-profile-photo wd-move-photo1 wd-move-up-5 wd-inline"/>

        </div>

        <div class="wd-column-right wd-white-text-block">
            <p class="wd-text-gray"><b class="wd-text-white">${post.userName}</b> ${post.handle} &#183; ${post.time} </p>

            <p class="wd-text-gray wd-move-up-20">${post.caption}
            </p>
            <image src=${post.image} class="wd-article-image me-2 mt-2 wd-div-boxes-bm"></image>
            
             <div class="me-2 wd-border-article wd-div-boxes-bm wd-move-up-40 wd-post-font p-2"><b class="wd-text-white wd-post-font m-1 mt-4">${post.title}</b><p class="wd-text-soft-gray d-post-font m-1">
                ${post.content}</p>
                ${post.link}</p>
                </div>
            <div class="row wd-move-up-30 wd-likes-font wd-text-soft-gray mt-0">
            <div class="col-3">
                <i class="fa-regular fa-comment wd-gray-icon wd-pad-12 wd-inline"></i>${post.numComments}</div>
                <div class="col-3">
                <i class="fa-solid fa-retweet wd-gray-icon wd-pad-12"></i>${post.numRetuits}</div>
                <div class="col-3">
                <i class="fa-regular fa-heart wd-red wd-pad-12"></i>${post.numLikes}</div>
                <div class="col-3">
                <i class="fa-solid fa-arrow-up-from-bracket wd-gray-icon wd-pad-12"></i></div>
            </div>
          
   
        </div>
    </div>

</div>
    
   `);
}
