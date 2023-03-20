import { NavLink } from 'react-router-dom'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="flex justify-between">
      <NavLink to="/" className="font-serif text-3xl">
        Victoria German
      </NavLink>
      <div className="flex gap-4">
        <NavLink to="/" className="font-serif text-lg">
          Work
        </NavLink>
        <NavLink to="/about" className="font-serif text-lg">
          About
        </NavLink>
      </div>
    </nav>
  )
}
