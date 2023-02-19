import PostSummaryList
    from "./../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row m-0">
                     
            <div class="input-group wd-rounded col-12 w-75 mx-0" id="input-container">
            <i class="fa-solid fa-magnifying-glass wd-draw-later px-2 wd-align-left wd-border-none wd-rounded rounded-pill"></i>
                <input type="text"
                       class="form-control w-100 py-2 wd-rounded wd-inline d-width-80pc rounded-pill"
                       id="search-bar"
                       placeholder="Search Tuiter"
                       width="80%">
                       </div>
                       
            <div class="col">
                 
                <i class="fa-solid fa-gear fa-2x wd-float-right wd-color-blue mt-1"></i>
            </div>
                
         
            
           </div>
           <ul class="nav mb-2 nav-tabs mt-2">
           <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
                </li>
                      
           </ul>
           <div class="m-0">
                <image src="../images/starship.jpg" class="pb-0 wd-width-100pc wd-container-align m-0"></image></div>
                <div class="wd-photo-text wd-inline px-2 m-0">SpaceX's Starship</div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
