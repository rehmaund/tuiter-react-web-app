import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

function TuitsStats ({tuit}) {
    console.log(tuit);
    const dispatch = useDispatch();

   /* const handleLike = ({tuit}) => {
        if(tuit.liked){
            dispatch(updateTuitThunk({...tuit, likes: tuit.likes - 1, liked: false}));
        } else {
            dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: true}));
        }
    }*/

    return (
    <div className="row wd-likes-font wd-text-soft-gray mt-oi90">
        <div className="wd-column-left"></div>
        <div className="col-2">
            <i className="fa-regular fa-comment wd-gray-icon wd-pad-8 wd-inline"></i>{tuit.replies}</div>
        <div className="col-2">
            <i className="fa-solid fa-retweet wd-gray-icon wd-pad-8"></i>{tuit.retuits}</div>
        <div className="col-2" onClick={() => {
            const likedStatus = !tuit.liked;
            const newLikes = likedStatus ? tuit.likes + 1 : tuit.likes - 1;
                dispatch(updateTuitThunk({...tuit, likes: newLikes, liked: likedStatus}))
        }}>
            <i className={`fa-solid fa-heart wd-pad-8 ${tuit.liked ? 'wd-red-icon' : 'wd-gray-icon'}`}></i>{tuit.likes}</div>
        <div className="col-2" onClick={() => {
            const dislikedStatus = !tuit.disliked;
            const newDislikes = dislikedStatus ? tuit.dislikes + 1 : tuit.dislikes - 1;
            dispatch(updateTuitThunk({...tuit, dislikes: newDislikes, disliked: dislikedStatus}))
        }}>
            <i className={`fa-solid fa-thumbs-up wd-pad-8 ${tuit.disliked ? 'wd-red-icon' : 'wd-gray-icon'}`}></i>{tuit.dislikes}</div>
        <div className="col-2">
            <i className="fa-solid fa-arrow-up-from-bracket wd-gray-icon wd-pad-8"></i></div>


    </div>
    );
}
export default TuitsStats;