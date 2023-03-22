import React from "react";
import TuitsItem from "./tuits-item.js";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group mt-2">
            {
                postsArray.map(post =>
                    <TuitsItem
                        key={post._id}
                        fullpost={post}
                    />
                )
            }
        </ul>
    );
};
export default TuitsList;