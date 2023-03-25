export default function PostSummaryItem(post) {
    return(`

      <div class="container wd-borderless list-group-item">
            <div class="row wd-borderless align-items-center">
                <div class="col-9 wd-text-soft-gray wd-borderless m-0">
                ${post.topic}
                    <p id="article-text" class="wd-text-soft-gray"><b class="wd-color-white">${post.userName}&nbsp;</b><i class="fa-solid fa-circle-check wd-color-white wd-inline"></i> - ${post.time}</p>
                <p class="wd-color-white"><b>${post.title}</b></p>
            
                </div>
                <div class="col-3 wd-borderless">
                <image src=${post.image} class="wd-article-photo wd-rounded-slight wd-vertical-align float-end m-0"></image>
              </div>
                
            </div>
      </div>
                
        
    
   `);
}
