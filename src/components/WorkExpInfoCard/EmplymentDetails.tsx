import classNames from "classnames";
import { AlignmentType } from "../../types";

interface IEmplymentDetailsProps {
  role: string;
  company: string;
  tenure: string;
  align: AlignmentType;
  className?: string;
}

function EmplymentDetails({
  role,
  company,
  tenure,
  align,
  className = "",
}: IEmplymentDetailsProps) {
  return (
    <div
      className={classNames(
        className,
        `flex flex-col 
          transition duration-200
          justify-center space-y-2
          border rounded-lg border-transparent
          group-hover:bg-gray-200 group-hover:cursor-pointer 
          `
      )}>
      <p
        className={classNames("text-xl text-center", {
          "md:text-right": align === "left",
          "md:text-left": align === "right",
        })}>
        {role}
      </p>
      <p
        className={classNames("text-ellipsis text-center", {
          "md:text-right": align === "left",
          "md:text-left": align === "right",
        })}>
        {company}
      </p>
      <p
        className={classNames(
          " text-gray-500 text-sm italic text-center",
          {
            "md:text-right": align === "left",
            "md:text-left": align === "right",
          }
        )}>
        {tenure}
      </p>
    </div>
  );
}

export default EmplymentDetails;
