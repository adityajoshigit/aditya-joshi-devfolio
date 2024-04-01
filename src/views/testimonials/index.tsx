import { RefObject } from "react";
import { SectionHeader } from "../../components";

function Testimonials({
  ref,
}: {
  ref?: RefObject<HTMLElement>;
}) {
  return (
    <section
      ref={ref}
      id="testimonials"
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

export default Testimonials;
