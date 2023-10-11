import Image from 'next/image'
import React from 'react'
import myDisplayPicture from "../../public/my_display_picture.jpg"

const HomeImage = () => {
  return (
    <div>
      <Image
        src={myDisplayPicture}
        alt="My Display Picture"
      />
    </div>
  )
}

export default HomeImage
