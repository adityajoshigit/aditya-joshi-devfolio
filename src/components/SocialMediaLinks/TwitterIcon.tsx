import { useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

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

export default TwitterIcon;
