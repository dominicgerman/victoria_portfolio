import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const style = `${
    isOpen ? '' : 'hidden'
  } absolute top-full h-screen w-full bg-amber-50 z-10 md:inline-block md:static md:h-auto md:w-auto bg-none`

  return (
    <nav className="flex items-center justify-between relative">
      <NavLink to="/" className="text-2xl md:text-3xl">
        Victoria German
      </NavLink>
      {/* absolute left-full -translate-x-3/4 */}
      <button
        className="text-4xl md:hidden z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <>&#x2715;</> : <>&#9776;</>}
      </button>
      <div className={style}>
        <div
          className={`flex flex-col gap-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 md:static md: md:translate-x-0 md:translate-y-0 md:flex-row `}
        >
          <NavLink
            to="/case-studies"
            className="text-4xl text-center md:text-lg"
            onClick={() => setIsOpen(false)}
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className="text-4xl text-center md:text-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
