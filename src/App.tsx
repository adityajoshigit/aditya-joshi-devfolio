import "./App.css";
import { Nav } from "./components";
import Navbar from "./components/Nav/Navbar";
import navMenuItems from "./data/navigationItems";
import {
  AboutMe,
  Contact,
  Education,
  Home,
  Projects,
  WorkExp,
} from "./views";

function App() {
  return (
    <div
      className="App flex  w-screen h-screen "
      data-testid="mainApp">
      {/* Navigation Panel */}
      <div className="w-1/4 px-4 p-6 bg-gray-800 text-white">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        {/* About Me Section */}
        <section
          id="about"
          className="mb-8">
          <h2 className="text-2xl font-semibold">
            About Me
          </h2>
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
          <h2 className="text-2xl font-semibold">
            Education
          </h2>
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
          <h2 className="text-2xl font-semibold">
            Work Experience
          </h2>
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
          <h2 className="text-2xl font-semibold">
            Projects
          </h2>
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
          <h2 className="text-2xl font-semibold">
            Testimonials
          </h2>
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
          <h2 className="text-2xl font-semibold">
            Contact Me
          </h2>
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
