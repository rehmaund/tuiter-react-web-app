import React from "react";

function ProfileComponent () {
    return(
        <div className="mt-2">
            <img src="/images/background.jpg" width="100%" height="200px"></img>


            <div className="row">
                <div className="col">
            <img src="/images/grimes.jpg" className="wd-rounded-photo mx-4" width="120px" height="120px"></img>
        </div>
                <div className="col">
                    <button className="btn btn-outline-dark float-end rounded-pill wd-move-up-btn">Edit profile</button>
                </div>

        </div>


            <div className="row">
                <div className="col mx-4 wd-move-up-70">
                    <h5 className="wd-color-black">Name</h5>
                    <p className="wd-text-gray">handle</p>
                    <p className="wd-text-black">write a bio</p>

                </div>
            </div>


            <div className="row wd-text-gray wd-move-up-50 mx-3">
                 <div className="col"><i className="fa-solid fa-location-dot"></i>&nbsp;location</div>
            <div className="col"><i className="fa-solid fa-cake-candles"></i>&nbsp;dob</div>
            <div className="col"><i className="fa-solid fa-calendar-days"></i>&nbsp;date joined</div>
                <div className="col"></div>
            </div>

            <div className="row mx-3 wd-move-up-30 wd-text-gray">
                <div className="col"><b className="wd-color-black">340&nbsp;</b>Following&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b className="wd-color-black">200&nbsp;</b>Followers</div>

            </div>

    </div>
    );
}

export default ProfileComponent;