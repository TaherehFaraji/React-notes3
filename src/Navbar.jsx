
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
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> | 
      <NavLink to="/about">About</NavLink> | 
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navbar