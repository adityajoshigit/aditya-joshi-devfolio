import { SectionHeader } from "../../components";
import React from "react";

export default React.forwardRef(
  (_, ref: React.ForwardedRef<HTMLElement>) => {
    return (
      <section
        ref={ref}
        id="alma-mater"
        className="mb-8">
        <SectionHeader label="Education" />
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae est eget turpis accumsan
          vulputate.
        </p>
        {/* Add more content for Education section */}
      </section>
    );
  }
);
