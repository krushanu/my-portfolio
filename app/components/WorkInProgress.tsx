import Image from "next/image";
import React from "react";
import WorkInProgressImage from "@/public/Work-in-progress.jpg";

const WorkInProgress = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={WorkInProgressImage}
        alt="WIP"
        priority
        placeholder="blur"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
};

export default WorkInProgress;
