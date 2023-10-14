import React from "react";

import twitter from "@/public/twitter.png";
import linkedin from "@/public/linkedin.png";
import facebook from "@/public/facebook.png";
import instagram from "@/public/instagram.png";
import youtube from "@/public/youtube.png";
import github from "@/public/github.png";
import npm from "@/public/npm.webp";
import stackoverflow from "@/public/stackoverflow.png";
import mail from "@/public/email.png";

import SocialMediaLinks from "./SocialMediaLinks";

const SocialLinks = [
  {
    src: twitter,
    alt: "Twitter",
    redirectTo: "https://twitter.com/KRUSHANUCHIKU",
  },
  {
    src: linkedin,
    alt: "LinkedIn",
    redirectTo: "https://www.linkedin.com/in/krushanu/",
  },
  {
    src: facebook,
    alt: "Facebook",
    redirectTo: "https://www.facebook.com/chiku.krushanu",
  },
  {
    src: instagram,
    alt: "Instagram",
    redirectTo: "https://www.instagram.com/krushanumohapatra/?hl=en",
  },
  {
    src: youtube,
    alt: "Youtube",
    redirectTo:
      "https://www.youtube.com/channel/UCUoNV8a7PLeDtsUstvsP5SA?view_as=subscriber",
  },
  { src: github, alt: "Github", redirectTo: "https://github.com/krushanu" },
  { src: npm, alt: "NPM", redirectTo: "https://www.npmjs.com/~krushanu" },
  {
    src: stackoverflow,
    alt: "stackoverflow",
    redirectTo: "https://stackoverflow.com/users/5572163/krushanu-mohapatra",
  },
  {
    src: mail,
    alt: "Email",
    redirectTo: "https://www.facebook.com/chiku.krushanu",
  },
];

const LinkList = () => {
  return (
    <>
      <ul className="justify-center space-x-4">
        {SocialLinks.map((eachLink, index) => (
          <SocialMediaLinks
            key={index}
            src={eachLink.src}
            alt={eachLink.alt}
            redirectTo={eachLink.redirectTo}
          />
        ))}
      </ul>
    </>
  );
};

export default LinkList;
