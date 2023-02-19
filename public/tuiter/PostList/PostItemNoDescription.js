
export default function PostItemNoDescription(post) {
    return(`
<div class="wd-div-boxes-bm">
    <i class="wd-3dots-gray wd-move-up wd-inline">&hellip;</i>
    <div class="wd-bookmark-item wd-move-up-40">
        <div class="wd-column-left">

            <img src=${post.profileImage}

                 class="wd-profile-photo wd-move-photo1 wd-move-up-5 wd-inline"/>

        </div>

        <div class="wd-column-right wd-white-text-block wd-borderless">
            <p class="wd-text-gray"><b class="wd-text-white">${post.userName}</b> ${post.handle} &#183; ${post.time} </p>

            <p class="wd-text-gray wd-move-up-20">${post.caption}
            </p>
            <image src=${post.image} class="wd-article-image-2 me-2 mt-2"></image>
            
            <div class="wd-move-up-30 wd-post-font mt-0">
                <i class="fa-regular fa-comment wd-gray-icon wd-pad-12"></i>${post.numComments}</a>
                <i class="fa-solid fa-retweet wd-gray-icon wd-pad-12"></i>${post.numRetuits}
                <i class="fa-regular fa-heart wd-red wd-pad-12"></i>${post.numLikes}
                <i class="fa-solid fa-arrow-up-from-bracket wd-gray-icon wd-pad-12"></i>
            </div>
          
   
        </div>
    </div>

</div>
    
   `);
}