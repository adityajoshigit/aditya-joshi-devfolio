import { RefObject, useRef } from "react";
import "./App.css";
import { MobileHeader, Nav } from "./components";
import navMenuItems from "./data/navigationItems";

function App() {
  const aboutMeRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const workExpRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLElement>(null);

  const refMap: {
    [sectionId: string]: RefObject<HTMLElement>;
  } = {
    "about-me": aboutMeRef,
    edu: educationRef,
    contact: contactRef,
    projects: projectsRef,
    testimonials: testimonialsRef,
    home: homeRef,
    "work-exp": workExpRef,
  };

  return (
    <div className="poppins-font-family">
      <MobileHeader />
      <div
        className="flex App"
        data-testid="mainApp">
        {/* Navigation Panel */}
        <Nav refMap={refMap} />

        {/* Main Content */}
        <div
          className={`
            ml-auto 
            p-6 
            w-full 
            overflow-y-auto
            md:w-3/5 
            lg:w-3/4 
            space-y-12
            `}>
          {navMenuItems.map(navItem => {
            if (!navItem.element) return null;
            const Component = navItem.element;
            return (
              <Component
                key={`section-${navItem.to}`}
                sectionId={navItem.to}
                ref={refMap?.[navItem.to]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
