// import { Link } from 'react-router-dom'

// const posts = [
//   { id: 1, title: 'React 19 New Features', excerpt: 'React 19 brings many improvements...' },
//   { id: 2, title: 'Understanding useEffect', excerpt: 'Side effects are crucial...' },
//   { id: 3, title: 'Context API vs Redux', excerpt: 'When to use which...' },
// ]

// function PostsList() {
//   return (
//     <div>
//       <h2>Blog Posts</h2>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <Link to={`/posts/${post.id}`}>{post.title}</Link>
//             <p>{post.excerpt}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// export default PostsList

import { Link, useSearchParams } from 'react-router-dom'
import posts from '../data/posts'

function PostsList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('search') || ''
  const sortQuery = searchParams.get('sort') || ''

  const filteredPosts = searchQuery
    ? posts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : posts

  const sortedPosts = sortQuery === 'title'
    ? [...filteredPosts].sort((a, b) => a.title.localeCompare(b.title))
    : filteredPosts

  const sortedAuthors = sortQuery === 'author'
    ? [...filteredPosts].sort((a, b) => a.author.localeCompare(b.author))
    : filteredPosts

  const visiblePosts = sortQuery === 'author' ? sortedAuthors : sortedPosts

  const handleSearchChange = e => {
    const value = e.target.value
    const nextParams = new URLSearchParams(searchParams)

    if (value) {
      nextParams.set('search', value)
    } else {
      nextParams.delete('search')
    }

    setSearchParams(nextParams)
  }

  return (
    <div>
      <h2>Blog Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {visiblePosts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <p>by {post.author}</p>
          </li>
        ))}
      </ul>
      {filteredPosts.length === 0 && <p>No posts found.</p>}
    </div>
  )
}
export default PostsList