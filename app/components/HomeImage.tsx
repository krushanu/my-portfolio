import Image from "next/image";
import React from "react";
import myDisplayPicture from "../../public/my_display_picture.jpg";

const HomeImage = () => {
  return (
    <figure className="relative">
      <Image
        src={myDisplayPicture}
        alt="My Display Picture"
        priority
        placeholder="blur"
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        className="object-cover overflow-hidden lg:h-screen"
      />
    </figure>
  );
};

export default HomeImage;
