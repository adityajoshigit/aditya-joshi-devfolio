import socialMediaLinks from "../../data/socialMediaLinks";

export interface ISocialMediaLinksProps {
  orientation?: "vertical" | "horizontal";
  iconAlignment?: "left" | "center" | "right";
}

function SocialMediaLinks({
  orientation = "horizontal",
  iconAlignment,
}: ISocialMediaLinksProps) {
  let parentWidth = "w-full";
  if (orientation === "vertical") parentWidth = "w-max";

  return (
    <div className={`${parentWidth}`}>
      {socialMediaLinks.map(
        ({ link, icon, altText }, index) => (
          <p className={` text-${iconAlignment}`}>
            {icon}
            <a
              href={link}
              className="p-2">
              {altText}
            </a>
          </p>
        )
      )}
    </div>
  );
}

export default SocialMediaLinks;
