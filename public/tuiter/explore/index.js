import NavigationSidebar from "./../NavigationSidebar/index.js";
import WhoToFollowList from "./../WhoToFollowList/WhoToFollowList.js";
import PostSummaryList from "./../PostSummaryList/PostSummaryList.js";
import ExploreComponent from "./ExploreComponent.js";
//import SmallNavigationSidebar from "./..NavigationSidebar/SmallNavigationSidebar.js"

let active = 'explore';
const handleEventTarget = (event) => {
    const target = event.target;
    console.log(target);
    if (target == 'home') {
        active = 'home';
    } else {
        active = 'explore'
    }
}

const eventTarget = $("#event-target");
eventTarget.click(handleEventTarget);



function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 d-none d-lg-block col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar(active)}
   </div>
   
 
   <div class="col-10 col-lg-7 col-xl-6">
    ${ExploreComponent()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    ${WhoToFollowList()}

   </div>
  </div> 
   `);
}
$(exploreComponent);

//<div className="col d-none d-md-block col-xs-2 col-sm-2 d-md-none d-lg-none d-xl-none d-xxl-none">

//</div>