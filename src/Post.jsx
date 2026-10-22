import { use, useMemo } from "react";
import { fetchPost } from "./data/api";

const promiseCache = new Map()

function getPostPromise(postId){
    if (!promiseCache.has(postId)){
        promiseCache.set(postId, fetchPost(postId))
    }
    return promiseCache.get(postId)
}

function Post({ postId }) {
    const post = use(getPostPromise(postId))

    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default Post