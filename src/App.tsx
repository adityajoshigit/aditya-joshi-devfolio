import { useRef } from "react";
import "./App.css";
import { MobileHeader, Nav } from "./components";
import {
  AboutMe,
  Education,
  Contact,
  Projects,
  Testimonials,
  WorkExp,
} from "./views";

function App() {
  const aboutMeRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const workExpRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLElement>(null);

  const refMap = {
    "about-me": aboutMeRef,
    "alma-mater": educationRef,
    contact: contactRef,
    projects: projectsRef,
    testimonials: testimonialsRef,
    home: homeRef,
  };

  return (
    <div className="poppins-font-family">
      <MobileHeader />
      <div
        className="flex App"
        data-testid="mainApp">
        {/* Navigation Panel */}
        <Nav />

        {/* Main Content */}
        <div className="ml-auto p-6 w-full sm:w-4/5 overflow-y-auto">
          {/* About Me Section */}
          <AboutMe ref={aboutMeRef} />
          {/* Education Section */}
          <Education ref={educationRef} />
          {/* Work Experience Section */}
          <Contact ref={contactRef} />
          {/* Projects Section */}
          <Projects ref={projectsRef} />
          {/* Testimonials Section */}
          <Testimonials ref={testimonialsRef} />
          {/* Contact Me Section */}
          <WorkExp ref={workExpRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
