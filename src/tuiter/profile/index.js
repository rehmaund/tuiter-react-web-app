import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function ProfileComponent () {
    const userData = useSelector(state => state.user)

    return(
        <div className="mt-2">
            <img src={userData.bannerPicture} width="100%" height="200px"></img>


            <div className="row">
                <div className="col">
            <img src={userData.profilePicture} id="wd-profile-photo" className="mx-4 wd-rounded-photo" width="120px" height="120px"></img>
        </div>
                <div className="col">
                    <Link to="/tuiter/edit-profile"><button className="btn btn-outline-dark float-end rounded-pill mt-2">Edit profile</button></Link>
                </div>

        </div>


            <div className="row">
                <div className="col mx-4 wd-move-up-40">
                    <h5 className="wd-color-black">{userData.firstName}&nbsp;{userData.lastName}</h5>
                    <p className="wd-text-gray">{userData.handle}</p>
                    <p className="wd-text-black">{userData.bio}</p>
                    <p className="wd-text-gray">{userData.website}</p>

                </div>
            </div>


            <div className="row wd-text-gray wd-move-up-40 mx-3">
                 <div className="col"><i className="fa-solid fa-location-dot"></i>&nbsp;{userData.location}</div>
            <div className="col"><i className="fa-solid fa-cake-candles"></i>&nbsp;{userData.dateOfBirth}</div>
            <div className="col"><i className="fa-solid fa-calendar-days"></i>&nbsp;{userData.dateJoined}</div>
                <div className="col"></div>
            </div>

            <div className="row mx-3 wd-move-up-30 wd-text-gray">
                <div className="col"><b className="wd-color-black">{userData.followingCount}&nbsp;</b>Following&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b className="wd-color-black">{userData.followersCount}&nbsp;</b>Followers</div>

            </div>

    </div>
    );
}

export default ProfileComponent;