import { useParams } from 'react-router-dom'

const posts = [
  { id: 1, title: 'React 19 New Features', content: 'Full content about React 19...', author: 'Dan' },
  { id: 2, title: 'Understanding useEffect', content: 'Detailed guide on useEffect...', author: 'Sarah' },
  { id: 3, title: 'Context API vs Redux', content: 'Comparison and use cases...', author: 'John' },
]

function PostDetail() {
  const { postId } = useParams() // postId is a string!
  const post = posts.find(p => p.id === Number(postId))

  if (!post) {
    return <h2>Post not found</h2>
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>By {post.author}</p>
      <p>{post.content}</p>
    </div>
  )
}
export default PostDetail