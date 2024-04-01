import React from "react";
import { SectionHeader } from "../../components";

export default React.forwardRef(
  (_, ref: React.ForwardedRef<HTMLElement>) => {
    return (
      <section
        ref={ref}
        id="work"
        className="mb-8">
        <SectionHeader label="Work Exp" />
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae est eget turpis accumsan
          vulputate.
        </p>
        {/* Add more content for Work Experience section */}
      </section>
    );
  }
);
