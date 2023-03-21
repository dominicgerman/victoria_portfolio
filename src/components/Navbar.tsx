import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <NavLink to="/" className=" text-3xl">
        Victoria German
      </NavLink>
      <div className="flex gap-4">
        <NavLink to="/" className=" text-lg">
          Work
        </NavLink>
        <NavLink to="/about" className=" text-lg">
          About
        </NavLink>
      </div>
    </nav>
  )
}
