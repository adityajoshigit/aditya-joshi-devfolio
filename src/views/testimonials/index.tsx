import { SectionHeader } from "../../components";
import React from "react";

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
        <SectionHeader label="Testimonials" />
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae est eget turpis accumsan
          vulputate.
        </p>
        {/* Add more content for Testimonials section */}
      </section>
    );
  }
);
