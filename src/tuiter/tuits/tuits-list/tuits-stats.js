import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

function TuitsStats ({tuit}) {
    console.log(tuit);
    const dispatch = useDispatch();

    /*const handleLike = ({tuit}) => {
        if(tuit.liked){
            dispatch(updateTuitThunk({...tuit, likes: tuit.likes - 1, liked: false}));
        } else {
            dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: true}));
        }
    }*/

    return (
    <div className="row wd-likes-font wd-text-soft-gray mt-oi90">
        <div className="wd-column-left"></div>
        <div className="col-3">
            <i className="fa-regular fa-comment wd-gray-icon wd-pad-8 wd-inline"></i>{tuit.replies}</div>
        <div className="col-3">
            <i className="fa-solid fa-retweet wd-gray-icon wd-pad-8"></i>{tuit.retuits}</div>
        <div className="col-3" onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes, liked: true}))}>
            <i className={`fa-solid fa-heart wd-pad-8 ${tuit.liked ? 'wd-red-icon' : 'wd-gray-icon'}`}></i>{tuit.likes}</div>
        <div className="col-3">
            <i className="fa-solid fa-arrow-up-from-bracket wd-gray-icon wd-pad-8"></i></div>


    </div>
    );
}
export default TuitsStats;