import { SectionHeader } from "../../components";

function AboutMe() {
  return (
    <section
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

export default AboutMe;
