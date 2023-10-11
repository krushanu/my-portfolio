import Link from 'next/link'
import React from 'react'

interface NavbarListProp {
  name: string,
  href: string
}

const NavbarList = ({ name, href }: NavbarListProp) => {
  return (
    <li><Link href={href}>{name}</Link></li>
  )
}

export default NavbarList