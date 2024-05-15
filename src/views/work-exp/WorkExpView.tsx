import { WorkExpInfoCard } from "../../components";
import workExpData from "../../data/workExpData";

function WorkExpView() {
  return (
    <div className="gap-0 gap-y-6 grid grid-cols-1 px-4">
      {workExpData.map(({ role, company, tenure }, index) =>
        // index
        {
          return (
            <>
              <WorkExpInfoCard
                key={`${role
                  .toLowerCase()
                  .trim()
                  .replaceAll(" ", "")}-${company
                  .toLowerCase()
                  .trim()
                  .replaceAll(" ", "")}-${tenure
                  .toLowerCase()
                  .trim()
                  .replaceAll(" ", "")}-${index}`}
                role={role}
                company={company}
                tenure={tenure}
                align={
                  (index + 1) % 2 === 0 ? "right" : "left"
                  // "left"
                }></WorkExpInfoCard>
              {/* {index !== workExpData.length - 1 ? (
                <div className="flex justify-center items-center w-full">
                  <div className="bg-cyan-600 rounded-lg w-2 h-2 translate-x-1/2"></div>
                </div>
              ) : null} */}
            </>
          );
        }
      )}
    </div>
  );
}

export default WorkExpView;
