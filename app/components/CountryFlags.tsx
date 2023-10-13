import React from "react";

import {
  India,
  Singapore,
  Germany,
  Spain,
  Portugal,
  Switzerland,
  Malaysia,
  Indonesia,
  UnitedKingdom,
  Canada,
} from "@/app/components/svg/index";

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
    <ul className="justify-center space-x-4">
      {/* {CountrySourceCode.map((eachItem, index) => (
        <CountryList key={index} src={eachItem.src} code={eachItem.code} />
      ))} */}

      {
        /* {CountrySourceCode.map((eachItem, index) => (*/
        <li
          // key={index}
          className="tooltip tooltip-bottom text-xl"
          data-tip={"eachItem.src"}
        >
          {/* <Image loading="lazy" className='w-10' src={eachItem.src} alt={eachItem.code} /> */}
          <Canada />
          <span hidden>{"eachItem.src"}</span>
        </li>
        /*))} */
      }
    </ul>
  );
};

export default CountryFlags;
