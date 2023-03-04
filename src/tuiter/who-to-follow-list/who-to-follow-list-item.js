import React from "react";
const WhoToFollowListItem = ({who}) => {
    return(

<div>

    <div class="container wd-border-none p-0 m-0">
        <div class="row wd-border-none p-0 m-0">
            <div class="col-2 wd-border-none p-0 m-0">
                <img src={who.avatarIcon}
                       class="wd-who-follow-photo wd-align-left mx-0 px-0 wd-move-icon-left"></img>
            </div>
            <div class="col-7 wd-border-none mx-0 px-0">
                <p class="wd-color-black wd-inline"><b class="wd-color-black">{who.userName}&nbsp;</b>
                    <i class="fa-solid fa-circle-check wd-color-black"></i><br/>
                {who.handle}
            </p>
        </div>
        <div class="col-3 wd-border-none center-block">
            <button type="button" class="btn btn-primary btn-sm btn-block mt-2 rounded-pill">Follow
            </button>
        </div>
    </div>
    </div>



</div>
)
};
export default WhoToFollowListItem;