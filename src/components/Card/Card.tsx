import classNames from "classnames";
import { ReactNode } from "react";

export interface ICardProps {
  children: ReactNode;
  className?: string;
  title?: string | ReactNode;
  body?: string | ReactNode;
  action?: string | ReactNode;
}

function Card({
  children,
  className = "",
  title,
  body,
  action,
}: ICardProps) {
  return (
    <div
      className={classNames(
        "flex flex-col items-start justify-start p-4 rounded-md shadow-md border-gray-400 ",
        className
      )}>
      <div className="flex flex-row flex-initial justify-between items-center w-full">
        {title && (
          <div className="flex-initial">{title}</div>
        )}
        {action && (
          <div className="flex-initial">{action}</div>
        )}
      </div>
      {body && (
        <div className="flex-grow w-full min-h-fit">
          {body}
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;
