import classNames from "classnames";
import { ShowMoreLayout } from "..";

interface IJobDutiesProps {
  description?: string;
  className?: string;
}

function JobDuties({
  description,
  className = "",
}: IJobDutiesProps) {
  if (!description) return null;
  return (
    <div className={classNames(className)}>
      <ShowMoreLayout>{description}</ShowMoreLayout>
    </div>
  );
}

export default JobDuties;
