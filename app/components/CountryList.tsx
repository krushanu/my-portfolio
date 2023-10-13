import Image from 'next/image'
import React from 'react'

interface CountryListProps {
  src: any,
  code: string
}

const CountryList = ({ src, code }: CountryListProps) => {
  return (
    <li className="tooltip tooltip-bottom text-xl" data-tip={code}>
      <Image width={25} height={25} src={src.src} alt={code} />
      <span hidden >{code}</span>
    </li>
  )
}

export default CountryList
