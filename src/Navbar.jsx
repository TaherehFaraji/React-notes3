
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
//     </nav>
//   )
// }

// export default Navbar

import { NavLink } from 'react-router-dom'

function Navbar() {

  const isActive = true;

  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> |
      <NavLink to="/about">About</NavLink> |
      <NavLink to="/contact">Contact</NavLink> |
      <NavLink
        to="/about"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
      >
        About
      </NavLink> |
    </nav>
  )
}

export default Navbar