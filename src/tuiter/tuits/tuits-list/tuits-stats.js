import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

function TuitsStats ({fullpost}) {

    const {tuit, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateTuitThunk(tuit))
    }, [])


    const [likes, setLikes] = tuit.likes;
    const [liked, setLiked] = tuit.liked;

   /* const handleLike = () => {
        if(liked){
            setLiked(false);
            setLikes((parseInt(likes) - 1).toString());
        } else {
            setLiked(true);
            setLikes((parseInt(likes) + 1).toString());
        }
        setLiked(!liked);
    };*/

    return (
    <div className="row wd-likes-font wd-text-soft-gray mt-oi90">
        <div className="wd-column-left"></div>
        <div className="col-3">
            <i className="fa-regular fa-comment wd-gray-icon wd-pad-8 wd-inline"></i>{tuit.replies}</div>
        <div className="col-3">
            <i className="fa-solid fa-retweet wd-gray-icon wd-pad-8"></i>{tuit.retuits}</div>
        <div className="col-3" onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
        }))}>
            <i className={`fa-solid fa-heart wd-pad-8 ${liked ? 'wd-red-icon' : 'wd-gray-icon'}`}></i>{tuit.likes}</div>
        <div className="col-3">
            <i className="fa-solid fa-arrow-up-from-bracket wd-gray-icon wd-pad-8"></i></div>


    </div>
    );
}
export default TuitsStats;