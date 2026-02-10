import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="glass-nav sticky top-0 z-50" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
        <Link to="/" className="transform transition-transform hover:scale-105">
          <img src="/LOGO.png" alt="Scalix Studios - Digital Agency Berkshire" width="160" height="40" className="h-10 md:h-12 w-auto" />
        </Link>
        <button
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 w-full md:w-auto`}>
          <ul className="flex flex-col mt-4 md:mt-0 md:flex-row md:space-x-8 text-lg font-medium text-center">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block py-3 md:py-2 transition-colors ${
                    pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                  {...(pathname === path ? { 'aria-current': 'page' } : {})}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
