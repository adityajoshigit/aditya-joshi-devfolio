import { RefObject } from "react";
import { SectionHeader } from "../../components";

function Projects({
  ref,
}: {
  ref?: RefObject<HTMLElement>;
}) {
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-8">
      <SectionHeader label="Projects" />
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nulla vitae est eget turpis accumsan
        vulputate.
      </p>
      {/* Add more content for Projects section */}
    </section>
  );
}

export default Projects;
