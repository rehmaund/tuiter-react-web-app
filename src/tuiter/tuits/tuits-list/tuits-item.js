import React from "react";
import TuitsStats from "./tuits-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";


const TuitsItem = ({tuit}) => {
    console.log(tuit);
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <div className="wd-div-boxes-bm">
            <i className="fa-regular fa-circle-xmark float-end m-2 mt-4 fa-lg" onClick={() => deleteTuitHandler(tuit._id)}></i>
        <div className="wd-bookmark-item">
            <div className="wd-column-left">

                <img src={tuit.image}

                     className="wd-profile-photo wd-move-photo1 wd-move-up-5 wd-inline"/>

            </div>

            <div className="wd-column-right wd-white-text-block">
                <p className="wd-text-gray"><b>{tuit.username}&nbsp;<i
                    className="fa-solid fa-circle-check text-primary"></i></b> {tuit.handle} &#183; {tuit.time} </p>


                <div className="me-2 wd-fullpost-font"><p className="wd-text-soft-gray d-post-font m-1">
                    {tuit.tuit}</p>

                </div>
                <br/>

                <TuitsStats key={tuit._id}
                            tuit={tuit}/>

            <br/>
            </div>
        </div>
        </div>
    );
}

export default TuitsItem;