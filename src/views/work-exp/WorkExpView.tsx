import { WorkExpInfoCard } from "../../components";

function WorkExpView() {
  return (
    <div className="gap-0 grid grid-cols-1">
      <WorkExpInfoCard
        role={"Role"}
        company={"Company"}
        tenure={"Tenure"}></WorkExpInfoCard>
    </div>
  );
}

export default WorkExpView;
