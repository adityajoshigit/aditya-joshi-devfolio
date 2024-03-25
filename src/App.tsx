import "./App.css";
import { Nav, SectionHeader } from "./components";

function App() {
  return (
    <div
      className="flex w-screen h-screen text-gray-800 App"
      data-testid="mainApp">
      {/* Navigation Panel */}
      <div className="top-0 bottom-0 left-0 fixed bg-gray-800 px-4 p-6 w-1/4 text-white">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="p-6 w-3/4">
        {/* About Me Section */}
        <section
          id="about"
          className="mb-8">
          <SectionHeader label="About Me" />
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate.
          </p>
          {/* Add more content for About Me section */}
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="mb-8">
          <SectionHeader label="Education" />
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate.
          </p>
          {/* Add more content for Education section */}
        </section>

        {/* Work Experience Section */}
        <section
          id="work"
          className="mb-8">
          <SectionHeader label="Work Exp" />
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate.
          </p>
          {/* Add more content for Work Experience section */}
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="mb-8">
          <SectionHeader label="Projects" />
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate.
          </p>
          {/* Add more content for Projects section */}
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="mb-8">
          <SectionHeader label="Testimonials" />
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate.
          </p>
          {/* Add more content for Testimonials section */}
        </section>

        {/* Contact Me Section */}
        <section
          id="contact"
          className="mb-8">
          <SectionHeader label="Contact Me" />
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla vitae est eget turpis
            accumsan vulputate.
          </p>
          {/* Add more content for Contact Me section */}
        </section>
      </div>
    </div>
  );
}

export default App;
