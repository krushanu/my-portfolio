import React from "react";

import India from "@/public/India.svg";
import Singapore from "@/public/Singapore.svg";
import Germany from "@/public/Germany.svg";
import Spain from "@/public/Spain.svg";
import Portugal from "@/public/Portugal.svg";
import Switzerland from "@/public/Switzerland.svg";
import Malaysia from "@/public/Malaysia.svg";
import Indonesia from "@/public/Indonesia.svg";
import UnitedKingdom from "@/public/UnitedKingdom.svg";
import Canada from "@/public/Canada.svg";

import CountryList from "./CountryList";

const CountrySourceCode = [
  { src: India, code: "IN" },
  { src: Singapore, code: "SG" },
  { src: Germany, code: "DE" },
  { src: Spain, code: "ES" },
  { src: Portugal, code: "PT" },
  { src: Switzerland, code: "CH" },
  { src: Malaysia, code: "MY" },
  { src: Indonesia, code: "ID" },
  { src: UnitedKingdom, code: "GB" },
  { src: Canada, code: "CA" },
];

const CountryFlags = () => {
  return (
    <ul className="justify-center space-x-4 lg:space-x-2 xl:lg:space-x-4">
      {CountrySourceCode.map((eachItem) => (
        <CountryList
          key={eachItem.src}
          src={eachItem.src}
          code={eachItem.code}
        />
      ))}
    </ul>
  );
};

export default CountryFlags;
