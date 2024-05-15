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
      className={classNames("w-full mx-auto flex group", {
        "flex-row-reverse": align === "right",
        "flex-row": align === "left",
      })}>
      <EmplymentDetails
        role={role}
        company={company}
        tenure={tenure}
        align={align}
        className="p-4 w-full md:w-2/5"
      />
      <JobDuties
        description={description}
        className="md:block hidden px-4 p-4 w-3/5"
      />
    </div>
  );
}

export default WorkExpInfoCard;
