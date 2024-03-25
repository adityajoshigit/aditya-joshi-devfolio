import socialMediaLinks from "../../data/socialMediaLinks";

export interface ISocialMediaLinksProps {
  orientation?: "vertical" | "horizontal";
  iconAlignment?: "left" | "center" | "right";
  openIn?: "_blank" | "_self";
}

function SocialMediaLinks({
  orientation = "horizontal",
  iconAlignment = "center",
  openIn = "_blank",
}: ISocialMediaLinksProps) {
  let parentWidth = "w-full";
  if (orientation === "vertical") parentWidth = "w-max";

  return (
    <div className={`${parentWidth}`}>
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
          <p
            key={`social-media-${index}-${altText}`}
            className={` text-${iconAlignment}`}>
            {icon}
            <a
              href={link}
              className="p-2"
              onClick={() => window.open(link, openIn)}>
              {altText}
            </a>
          </p>
        ))}
    </div>
  );
}

export default SocialMediaLinks;
