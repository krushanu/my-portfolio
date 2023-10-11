'use client'
import React from 'react'
import NavbarList from './components/NavbarList'
import { usePathname } from 'next/navigation'

const NavList = [
  { label: 'Home', href: '/' },
  { label: 'My Work', href: '/universe' },
  { label: 'Work Experience', href: '/work' },
  { label: 'Education', href: '/education' },
  { label: 'Contact Me', href: '/contact' },
]

const Navbar = () => {
  const currentPath = usePathname()
  if (currentPath === '/') return null
  return (
    <nav className='justify-center border-b'>
      <h2 className='px-3'>Krushanu Mohapatra</h2>
      <ul className='flex justify-center h-14 Item-center space-x-5'>
        {NavList.map((eachItem, index) => <NavbarList currentPath={currentPath} key={index} name={eachItem.label} href={eachItem.href} />)}
      </ul>
    </nav>
  )
}

export default Navbar
