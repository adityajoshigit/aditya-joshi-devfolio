import { SectionHeader } from "../../components";
import React from "react";
import ContactView from "./ContactView";

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
        className="mb-8 w-full">
        <SectionHeader label="Contact Me" />
        <ContactView />
      </section>
    );
  }
);
