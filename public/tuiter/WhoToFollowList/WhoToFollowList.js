import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";


const WhoToFollowList = () => {
    return (`
       <ul class="list-group">
            <li class="list-group-item">Who to follow</li>
            ${WhoToFollowListItem(who[0])}
            ${WhoToFollowListItem(who[1])}
            ${WhoToFollowListItem(who[2])}
            ${WhoToFollowListItem(who[3])}
            
       </ul>
`);
}
export default WhoToFollowList;