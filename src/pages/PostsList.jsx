import { Link } from 'react-router-dom'

const posts = [
  { id: 1, title: 'React 19 New Features', excerpt: 'React 19 brings many improvements...' },
  { id: 2, title: 'Understanding useEffect', excerpt: 'Side effects are crucial...' },
  { id: 3, title: 'Context API vs Redux', excerpt: 'When to use which...' },
]

function PostsList() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default PostsList