import Image from "next/image";
import React from "react";

interface CountryListProps {
  src: any;
  code: string;
}

const CountryList = ({ src, code }: CountryListProps) => {
  return (
    <li className="tooltip tooltip-bottom text-xl" data-tip={code}>
      <Image
        className="w-10 h-10 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
        src={src}
        alt={code}
      />
      <span hidden>{code}</span>
    </li>
  );
};

export default CountryList;
