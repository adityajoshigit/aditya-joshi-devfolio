import { Fragment } from "react/jsx-runtime";
import { WorkExpInfoCard } from "../../components";
import workExpData from "../../data/workExpData";
import { FaEllipsisVertical } from "react-icons/fa6";

function WorkExpView() {
  return (
    <div className="gap-0 gap-y-2 grid grid-cols-1 px-4">
      {workExpData.map(
        ({ role, company, tenure, description }, index) => {
          return (
            <Fragment
              key={`${role
                .toLowerCase()
                .trim()
                .replaceAll(" ", "")}-${company
                .toLowerCase()
                .trim()
                .replaceAll(" ", "")}-${tenure
                .toLowerCase()
                .trim()
                .replaceAll(" ", "")}-${index}`}>
              <WorkExpInfoCard
                role={role}
                company={company}
                tenure={tenure}
                description={description}
                align={
                  (index + 1) % 2 === 0 ? "right" : "left"
                }></WorkExpInfoCard>
              {index !== workExpData.length - 1 ? (
                <div className="flex flex-col justify-center items-center w-full">
                  <FaEllipsisVertical />
                  <FaEllipsisVertical />
                </div>
              ) : null}
            </Fragment>
          );
        }
      )}
    </div>
  );
}

export default WorkExpView;
