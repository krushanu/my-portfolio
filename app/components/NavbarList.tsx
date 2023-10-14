import classNames from "classnames";
import Link from "next/link";
import React from "react";

interface NavbarListProp {
  name: string;
  href: string;
  currentPath: string;
}

const NavbarList = ({ name, href, currentPath }: NavbarListProp) => {
  return (
    <li className="text-center">
      <Link
        className={classNames({
          "hover:text-zinc-800": true,
          "text-zinc-900": href === currentPath,
          "text-zinc-500": true,
        })}
        href={href}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavbarList;
