import classNames from "classnames";
import { ShowMoreLayout } from "..";

interface IJobDutiesProps {
  description?: string;
  className?: string;
  align?: string;
}

function JobDuties({
  description,
  className = "",
  align = "left",
}: IJobDutiesProps) {
  if (!description) return null;
  return (
    <div className={classNames(className)}>
      <ShowMoreLayout
        className={classNames({
          "md:text-right": align === "left",
          "md:text-left": align === "right",
        })}>
        {description}
      </ShowMoreLayout>
    </div>
  );
}

export default JobDuties;
