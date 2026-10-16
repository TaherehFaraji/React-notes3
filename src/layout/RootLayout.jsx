import { Outlet, Link } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <header style={{ background: '#333', color: 'white', padding: '10px' }}>
        <h1>My Blog</h1>
        <nav>
          <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', marginRight: '10px' }}>About</Link>
          <Link to="/posts" style={{ color: 'white' }}>Posts</Link>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <footer style={{ background: '#333', color: 'white', textAlign: 'center', padding: '10px' }}>
        &copy; 2026 My Blog
      </footer>
    </div>
  )
}
export default RootLayout
