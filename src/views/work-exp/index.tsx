import React from "react";
import { SectionHeader } from "../../components";
import WorkExpView from "./WorkExpView";

export default React.forwardRef(
  (
    {
      sectionId,
    }: {
      sectionId: string;
    },
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    return (
      <section
        ref={ref}
        id={sectionId}
        className="mb-8">
        <SectionHeader label="Work Exp" />
        <WorkExpView />
        {/* Add more content for Work Experience section */}
      </section>
    );
  }
);
