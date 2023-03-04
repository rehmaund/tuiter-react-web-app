import React from "react";
import PostListItem from "./post-list-item";
import PostListItemFull from "./post-list-item-full";
import fullpost from "./fullpost.json"


const PostList = () => {
    return (
        <ul class="list-group mt-2">
            <PostListItemFull fullpost={fullpost[0]}/>
            <PostListItem fullpost={fullpost[1]}/>

    </ul>
)
}
export default PostList;