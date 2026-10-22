export function fetchPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
            if (!res.ok) throw new Error('Post not found')
            return res.json()
        })
}