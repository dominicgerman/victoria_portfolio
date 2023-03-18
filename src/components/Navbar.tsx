import { NavLink } from 'react-router-dom'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav>
      <NavLink to="/">Work</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}
