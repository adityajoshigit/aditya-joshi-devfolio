import { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";

const GithubIcon = () => {
  const [iconColor, setIconColor] = useState("white");
  return (
    <FaGithubSquare
      className="cursor-pointer"
      size={20}
      color={iconColor}
      onMouseOver={() => setIconColor("#cdcdcd")}
      onMouseOut={() => setIconColor("white")}
    />
  );
};

export default GithubIcon;
