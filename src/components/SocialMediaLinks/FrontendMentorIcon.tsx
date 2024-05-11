import { SiFrontendmentor } from "react-icons/si";
import { textColorScheme } from "../../constants";

const FrontendMentorIcon = () => {
  return (
    <SiFrontendmentor
      className={`hover:${textColorScheme.lime[500]} transition duration-150 cursor-pointer`}
      size={20}
    />
  );
};

export default FrontendMentorIcon;
