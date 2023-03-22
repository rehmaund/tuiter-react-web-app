import React from "react";
import TuitsStats from "./tuits-stats";


const TuitsItem = ({fullpost}) => {
    return (
        <div className="wd-div-boxes-bm">
            <i className="wd-3dots-gray wd-move-up wd-inline">&hellip;</i>
        <div className="wd-bookmark-item wd-move-up-40">
            <div className="wd-column-left">

                <img src={fullpost.image}

                     className="wd-profile-photo wd-move-photo1 wd-move-up-5 wd-inline"/>

            </div>

            <div className="wd-column-right wd-white-text-block">
                <p className="wd-text-gray"><b className="wd-text-gray">{fullpost.userName}&nbsp;<i
                    className="fa-solid fa-circle-check text-primary"></i></b> {fullpost.handle} &#183; {fullpost.time} </p>


                <div className="me-2 wd-fullpost-font"><p className="wd-text-soft-gray d-post-font m-1">
                    {fullpost.tuit}</p>

                </div>
                <br/>

                <TuitsStats key={fullpost._id}
                            fullpost={fullpost}/>


            </div>
        </div>
        </div>
    );
}

export default TuitsItem;