import { WorkExpInfoCard } from "../../components";
import workExpData from "../../data/workExpData";

function WorkExpView() {
  return (
    <div className="gap-0 grid grid-cols-1">
      {workExpData.map(
        ({ role, company, tenure }, index) => (
          <WorkExpInfoCard
            role={role}
            company={company}
            tenure={tenure}
            align={
              (index + 1) % 2 === 0 ? "right" : "left"
            }></WorkExpInfoCard>
        )
      )}
    </div>
  );
}

export default WorkExpView;
