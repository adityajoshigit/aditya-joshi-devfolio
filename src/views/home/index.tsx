import React from "react";
import HomeView from "./HomeView";

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
        id={sectionId}
        ref={ref}>
        <HomeView />
      </section>
    );
  }
);
