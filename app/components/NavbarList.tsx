import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

interface NavbarListProp {
  name: string,
  href: string,
  currentPath: string;
}

const NavbarList = ({ name, href, currentPath }: NavbarListProp) => {
  return (
    <li><Link className={classNames({ 'hover:border-b': true, 'border-b': href === currentPath })} href={href}>{name}</Link></li>
  )
}

export default NavbarList