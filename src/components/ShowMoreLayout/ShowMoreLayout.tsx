import classNames from "classnames";
import { ReactNode, useState } from "react";

export interface IShowMoreLayoutProps {
  className?: string;
  children?: string | ReactNode;
}

function ShowMoreLayout({
  className = "",
  children,
}: IShowMoreLayoutProps) {
  const [isMoreShown, setIsMoreShown] = useState(false);
  if (!children) return null;
  const toggleState = () => {
    setIsMoreShown(prevValue => !prevValue);
  };
  return (
    <>
      <div
        className={classNames(
          className,
          isMoreShown ? "" : "h-[100px] overflow-hidden "
        )}>
        <div className="inset-0 flex flex-col justify-start items-center">
          <div
            className={classNames(
              "overflow-hidden",
              isMoreShown ? "" : ""
            )}>
            {children}
          </div>
        </div>
        <div className="text-right w-full group">
          <button
            className="group-hover:text-neutral-700 text-neutral-500 text-sm hover:text-neutral-800 underline underline-offset-2 hover:underline italic hover:cursor-pointer"
            onClick={() => toggleState()}>
            {isMoreShown ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ShowMoreLayout;
