import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SocialMediaLinks {
  src: StaticImageData,
  alt: string,
  redirectTo: string
}

const SocialMediaLinks = ({ src, alt, redirectTo }: SocialMediaLinks) => {
  return (
    <li><Link href={redirectTo}><Image width={40} src={src} alt={alt} /></Link></li>
  )
}

export default SocialMediaLinks
