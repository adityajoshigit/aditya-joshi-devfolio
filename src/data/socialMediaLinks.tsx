import { ISocialMediaLinkData } from "../types";

const socialMediaLinks: ISocialMediaLinkData[] = [
  {
    link: "https://www.linkedin.com/in/adityasjoshi96/",
    altText: "linkedin",
    order: 1,
    id: "linkedin",
    show: true,
  },
  {
    link: "https://www.twitter.com",
    altText: "twitter",
    order: 2,
    id: "twitter",
    show: false,
  },
  {
    link: "https://www.frontendmentor.io/profile/adityajoshigit",
    altText: "frontend-mentor",
    order: 3,
    id: "frontend-mentor",
    show: true,
  },
  {
    link: "https://github.com/adityajoshigit",
    altText: "github",
    order: 3,
    id: "github",
    show: true,
  },
];

export default socialMediaLinks;
