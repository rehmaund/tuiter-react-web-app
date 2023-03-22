import React, {useState} from "react";

function TuitsStats ({fullpost}) {
    const [likes, setLikes] = useState(fullpost.likes)
    const [liked, setLiked] = useState(fullpost.liked)

    const handleLike = () => {
        if(liked){
            setLiked(false);
            setLikes((parseInt(likes) - 1).toString());
        } else {
            setLiked(true);
            setLikes((parseInt(likes) + 1).toString());
        }
        setLiked(!liked);
    };

    return (
    <div className="row wd-likes-font wd-text-soft-gray mt-oi90">
        <div className="wd-column-left"></div>
        <div className="col-3">
            <i className="fa-regular fa-comment wd-gray-icon wd-pad-8 wd-inline"></i>{fullpost.replies}</div>
        <div className="col-3">
            <i className="fa-solid fa-retweet wd-gray-icon wd-pad-8"></i>{fullpost.retuits}</div>
        <div className="col-3" onClick={handleLike}>
            <i className={`fa-solid fa-heart wd-pad-8 ${liked ? 'wd-red-icon' : 'wd-gray-icon'}`}></i>{likes}</div>
        <div className="col-3">
            <i className="fa-solid fa-arrow-up-from-bracket wd-gray-icon wd-pad-8"></i></div>


    </div>
    );
}
export default TuitsStats;