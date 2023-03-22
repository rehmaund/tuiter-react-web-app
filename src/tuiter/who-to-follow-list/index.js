import React from "react";
import WhoToFollowListItem
    from "./who-to-follow-list-item";
import {useSelector} from "react-redux";



const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);
    return(
        <ul className="list-group">
            <li className="list-group-item wd-vertical-align">
                <h4 className="wd-color-black wd-vertical-align wd-move-down-5">Who to follow</h4>
            </li>
            {
                whoArray.map(who =>
                    <li className="list-group-item"><WhoToFollowListItem
                        key={who._id}
                        who={who}/></li>
                )

            }
        </ul>
    )
};

export default WhoToFollowList;