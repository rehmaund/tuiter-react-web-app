import PostItem from "./PostItem.js";
import post from "./post.js";

const PostList = () => {
    return (`
        <ul class="list-group">
            ${PostItem(post[0])}
            ${PostItem(post[1])}
 
    </ul>
`);
}
export default PostList;