import React from "react";
const WhoToFollowListItem = ({who}) => {
    return(

<div>

    <div className="container wd-border-none p-0 m-0">
        <div className="row wd-border-none p-0 m-0">
            <div className="col-2 wd-border-none p-0 m-0">
                <img src={who.avatarIcon}
                       className="wd-who-follow-photo wd-align-left mx-0 px-0 wd-move-icon-left"></img>
            </div>
            <div className="col-7 wd-border-none mx-0 px-0">
                <p className="wd-color-black wd-inline"><b className="wd-color-black">{who.userName}&nbsp;</b>
                    <i className="fa-solid fa-circle-check wd-color-black"></i><br/>
                {who.handle}
            </p>
        </div>
        <div className="col-3 wd-border-none center-block">
            <button type="button" className="btn btn-primary btn-sm btn-block mt-2 rounded-pill">Follow
            </button>
        </div>
    </div>
    </div>



</div>
)
};
export default WhoToFollowListItem;