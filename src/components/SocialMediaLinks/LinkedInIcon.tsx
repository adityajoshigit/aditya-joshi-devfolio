import { useState } from "react";
import { RxLinkedinLogo } from "react-icons/rx";

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

export default LinkedInIcon;
