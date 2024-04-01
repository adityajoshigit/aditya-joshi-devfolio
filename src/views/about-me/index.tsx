import React from "react";
import { SectionHeader } from "../../components";

export default React.forwardRef(
  (_, ref: React.ForwardedRef<HTMLElement>) => {
    return (
      <section
        ref={ref}
        id="about"
        className="mb-8">
        <SectionHeader label="About Me" />
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae est eget turpis accumsan
          vulputate.
        </p>
        {/* Add more content for About Me section */}
      </section>
    );
  }
);
