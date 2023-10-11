import Link from 'next/link'
import React from 'react'
import NavbarList from './components/NavbarList'

const NavList = [
  { label: 'Home', href: '/' },
  { label: 'My Work', href: '/universe' },
  { label: 'Work Experience', href: '/work' },
  { label: 'Education', href: '/education' },
  { label: 'Contact Me', href: '/contact' },
]

const Navbar = () => {
  return (
    <nav>
      <ul>
        {NavList.map((eachItem, index) => <NavbarList key={index} name={eachItem.label} href={eachItem.href} />)}
      </ul>
    </nav>
  )
}

export default Navbar