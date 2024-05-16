import classNames from "classnames";
import {
  BG_BRAND,
  BG_WHITE,
  TEXT_BRAND,
  TEXT_WHITE,
} from "../../constants";
import { NameTag } from "../NameTag";
import useGlobalContext from "../../hooks/useGlobalContext";

interface IMobileHeaderProps {
  defaultName?: string;
}

function MobileHeader({
  defaultName = "<AdityaJoshi />",
}: IMobileHeaderProps) {
  const { openNav, theme, headerName } = useGlobalContext();

  const name = headerName || defaultName;

  const onMenuClick = () => {
    openNav();
  };

  return (
    <div
      className={classNames(
        "top-0 left-0 sticky flex flex-row md:hidden px-4 py-2 w-full z-50",
        theme === "LIGHT" ? BG_BRAND : BG_WHITE,
        theme === "LIGHT" ? TEXT_WHITE : TEXT_BRAND
      )}>
      <div className="flex-initial w-1/5 hamburger-icon">
        <button
          className="border-white p-2 max-w-fit internal-container"
          onClick={onMenuClick}>
          <img
            alt="profile"
            src="/images/prof_pic_asj.PNG"
            width="50"
            height="60"
            className="rounded-full"
          />
        </button>
      </div>
      <div className="flex flex-auto items-center name-header">
        <NameTag name={name} />
      </div>
    </div>
  );
}

export default MobileHeader;
