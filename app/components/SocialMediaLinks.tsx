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
    <li className="tooltip tooltip-top text-xl" data-tip={alt}>
      <Link href={redirectTo}>
        <Image className='w-14' src={src} alt={alt} />
      </Link>
    </li>
  )
}

export default SocialMediaLinks
