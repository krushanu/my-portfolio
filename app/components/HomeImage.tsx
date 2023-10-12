import Image from 'next/image'
import React from 'react'
import myDisplayPicture from "../../public/my_display_picture.jpg"

const HomeImage = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={myDisplayPicture}
        alt="My Display Picture"
        priority
        placeholder='blur'
        quality={100}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        className="object-cover overflow-hidden"
      />
    </div>
  )
}

export default HomeImage

//   < Image
// src = { myDisplayPicture }
// alt = "My Display Picture"
// priority
// fill
// sizes = "100vw"
// quality = { 100}
// className = "object-cover"

//   // style={{
//   //   objectFit: 'cover',
//   //   // width: '100%',
//   //   // height: 'auto',
//   // }}
//   />