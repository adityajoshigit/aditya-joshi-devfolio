import { useState } from "react";
import { ISocialMediaLinkData } from "../types";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const LinkedInIcon = () => {
  const [iconColor, setIconColor] = useState("white");
  return (
    <RxLinkedinLogo
      className="cursor-pointer"
      size={25}
      color={iconColor}
      onMouseOver={() => setIconColor("#0077B5")}
      onMouseOut={() => setIconColor("white")}
    />
  );
};

const GithubIcon = () => {
  const [iconColor, setIconColor] = useState("white");
  return (
    <FaGithubSquare
      className="cursor-pointer"
      size={25}
      color={iconColor}
      onMouseOver={() => setIconColor("#cdcdcd")}
      onMouseOut={() => setIconColor("white")}
    />
  );
};

const TwitterIcon = () => {
  const [iconColor, setIconColor] = useState("white");
  return (
    <FaSquareXTwitter
      className="cursor-pointer"
      size={25}
      color={iconColor}
      onMouseOver={() => setIconColor("#1DA1F2")}
      onMouseOut={() => setIconColor("white")}
    />
  );
};

const socialMediaLinks: ISocialMediaLinkData[] = [
  {
    link: "www.linkedin.com",
    altText: "linkedin",
    icon: <LinkedInIcon />,
    order: 1,
  },
  {
    link: "www.twitter.com",
    altText: "twitter",
    icon: <TwitterIcon />,
    order: 2,
  },
  {
    link: "www.github.com",
    altText: "github",
    icon: <GithubIcon />,
  },
];

export default socialMediaLinks;
