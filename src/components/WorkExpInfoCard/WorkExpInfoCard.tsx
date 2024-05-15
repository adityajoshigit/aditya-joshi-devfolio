import classNames from "classnames";
import {
  AlignmentType,
  WorkExpDetailsType,
} from "../../types";
import JobDuties from "./JobDuties";
import EmplymentDetails from "./EmplymentDetails";

export interface IWorkExpInfoCardProps
  extends WorkExpDetailsType {
  className?: string;
  align?: AlignmentType;
}

function WorkExpInfoCard({
  // className = "",
  align = "left",
  role,
  company,
  tenure,
  description,
}: IWorkExpInfoCardProps) {
  return (
    <div
      className={classNames(
        "w-full mx-auto flex justify-center items-center group ",
        {
          "flex-row-reverse": align === "right",
          "flex-row": align === "left",
        }
      )}>
      <EmplymentDetails
        role={role}
        company={company}
        tenure={tenure}
        align={align}
        className="px-4 py-2 w-full"
      />
      <JobDuties
        description={description}
        className="md:block hidden px-4 py-2"
      />
    </div>
  );
}

export default WorkExpInfoCard;
