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
        <SectionHeader label="Contact Me" />
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae est eget turpis accumsan
          vulputate.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae est eget turpis accumsan
          vulputate.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae est eget turpis accumsan
          vulputate. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio magnam quibusdam recusandae
          consequuntur cum nisi. Laudantium cumque adipisci
          nihil sunt atque, eveniet aspernatur! Delectus
          quas eius iusto laudantium adipisci tempora. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem pariatur error, sapiente officia eaque
          voluptatum adipisci ea est asperiores vel tempora
          magni deserunt cumque saepe perspiciatis natus.
          Debitis, eum perferendis!Lorem Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Eius
          blanditiis dolor veniam porro odit earum quod?
          Quod voluptas, praesentium fugiat iure laboriosam
          eius quas, nisi expedita minus cupiditate,
          dignissimos neque.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae est eget turpis accumsan
          vulputate.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae est eget turpis accumsan
          vulputate. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio magnam quibusdam recusandae
          consequuntur cum nisi. Laudantium cumque adipisci
          nihil sunt atque, eveniet aspernatur! Delectus
          quas eius iusto laudantium adipisci tempora. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem pariatur error, sapiente officia eaque
          voluptatum adipisci ea est asperiores vel tempora
          magni deserunt cumque saepe perspiciatis natus.
          Debitis, eum perferendis!Lorem Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Eius
          blanditiis dolor veniam porro odit earum quod?
          Quod voluptas, praesentium fugiat iure laboriosam
          eius quas, nisi expedita minus cupiditate,
          dignissimos neque.
        </p>
        {/* Add more content for Contact Me section */}
      </section>
    );
  }
);
