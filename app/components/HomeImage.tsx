import Image from 'next/image'
import React from 'react'
import myDisplayPicture from "../../public/my_display_picture.jpg"

const HomeImage = () => {
  return (
    <div>
      {/* <div className='relative h-screen'> */}
      <Image
        src={myDisplayPicture}
        alt="My Display Picture"
      // layout="responsive"
      // loading="lazy"
      className='object-cover'
      />
    </div>
  )
}

export default HomeImage
