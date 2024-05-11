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
        ref={ref}
        className="flex flex-col justify-center items-center bg-slate-50 w-full min-h-[100vh]">
        <HomeView />
      </section>
    );
  }
);
