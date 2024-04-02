import socialMediaLinks from "../../data/socialMediaLinks";
import { SocialMediaComponentMapType } from "../../types";
import GithubIcon from "./GithubIcon";
import LinkedInIcon from "./LinkedInIcon";
import TwitterIcon from "./TwitterIcon";

export interface ISocialMediaLinksProps {
  openIn?: "_blank" | "_self";
}

function SocialMediaLinks({
  openIn = "_blank",
}: ISocialMediaLinksProps) {
  const socialMediaComponentMap: SocialMediaComponentMapType =
    {
      github: <GithubIcon />,
      linkedin: <LinkedInIcon />,
      twitter: <TwitterIcon />,
    };

  return (
    <div className="flex flex-row justify-between w-full overflow-x-auto">
      {socialMediaLinks
        .sort((a, b) => {
          if (
            a.order !== undefined &&
            b.order !== undefined
          )
            return a.order - b.order;
          return -1;
        })
        .map(({ link, altText, id }, index) => (
          <div
            key={`social-media-${index}-${altText}`}
            onClick={() => window.open(link, openIn)}
            className="flex flex-auto justify-center items-center px-2">
            {socialMediaComponentMap[id]}
          </div>
        ))}
    </div>
  );
}

export default SocialMediaLinks;
