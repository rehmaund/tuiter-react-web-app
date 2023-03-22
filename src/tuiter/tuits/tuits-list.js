import React from "react";
import TuitsItem from "./tuits-item.js";
import {useSelector} from "react-redux";
import TuitsStats from "./tuits-stats";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
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