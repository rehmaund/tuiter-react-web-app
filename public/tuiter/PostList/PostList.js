import PostItem from "./PostItem.js";
import PostItemNoDescription from "./PostItemNoDescription.js";
import post from "./post.js";

const PostList = () => {
    return (`
        <ul class="list-group mt-2">
            ${PostItem(post[0])}
            ${PostItemNoDescription(post[1])}
 
    </ul>
`);
}
export default PostList;