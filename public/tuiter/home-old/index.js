import NavigationSidebar from "./../NavigationSidebar/index.js";
import PostSummaryList from "./../PostSummaryList/PostSummaryList.js";
import PostList from "./../PostList/PostList.js";
import SmallNavigationSidebar from "./../NavigationSidebar/SmallNavigationSidebar.js";
function homeComponent() {
    $('#wd-home').append(`
  <div class="row mt-2">
     <div class="col d-none d-lg-block d-sm-none d-md-none col-lg-2 col-xl-2 col-xxl-2">
        ${NavigationSidebar('home')}
   </div>
   <div class="col d-none d-sm-block col-xs-2 col-sm-2 col-md-2 d-lg-none d-xl-none d-xxl-none">
   ${SmallNavigationSidebar('home')}
</div>
   <div class="col-10 col-lg-7 col-xl-6">
    ${PostList()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    ${PostSummaryList()}

   </div>
  </div> 
   `);
}
$(homeComponent);