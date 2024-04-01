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
        id={sectionId}
        ref={ref}>
        Home
      </section>
    );
  }
);
