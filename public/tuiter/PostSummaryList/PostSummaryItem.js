export default function PostSummaryItem(post) {
    return(`

      <div class="container wd-flex wd-borderless list-group-item">
            <div class="wd-borderless row">
                <div class="col-10 wd-text-soft-gray wd-borderless">
                ${post.topic}
                    <p id="article-text" class="wd-text-soft-gray"><b class="wd-color-white">${post.userName}&nbsp;</b><i class="fa-solid fa-circle-check wd-color-white wd-inline"></i> - ${post.time}</p>
                <p class="wd-color-white"><b>${post.title}</b></p>
            
                </div>
                <div class="col-2 wd-borderless float-end wd-vertical-align">
                <image src=${post.image} class="wd-article-photo wd-rounded-slight wd-vertical-align float-end"></image>
              </div>
                
            </div>
      </div>
                
        
    
   `);
}
/*
      <div class="wd-text-soft-gray wd-borderless">
<div class="col-2 wd-borderless float-end wd-vertical-align">
                <image src=${post.image} class="wd-article-photo wd-rounded-slight wd-vertical-align float-end"></image>
              </div>
 */