import socialMediaLinks from "../../data/socialMediaLinks";

export interface ISocialMediaLinksProps {
  openIn?: "_blank" | "_self";
}

function SocialMediaLinks({
  openIn = "_blank",
}: ISocialMediaLinksProps) {
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
        .map(({ link, icon, altText }, index) => (
          <div
            key={`social-media-${index}-${altText}`}
            onClick={() => window.open(link, openIn)}
            className="flex flex-auto justify-center items-center px-2">
            {icon}
          </div>
        ))}
    </div>
  );
}

export default SocialMediaLinks;
