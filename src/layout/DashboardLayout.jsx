import { Outlet, Link } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', background: '#f0f0f0', padding: '10px' }}>
        <h3>Dashboard</h3>
        <ul>
          <li><Link to="about">about</Link></li>
          <li><Link to="contact">contact</Link></li>
        </ul>
      </nav>
      <main style={{ flex: 1, padding: '10px' }}>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  )
}
export default DashboardLayout
