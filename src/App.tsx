import "./App.css";
import {
  MobileHeader,
  Nav,
  SectionHeader,
} from "./components";

function App() {
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

          {/* Education Section */}

          {/* Work Experience Section */}

          {/* Projects Section */}

          {/* Testimonials Section */}

          {/* Contact Me Section */}
        </div>
      </div>
    </div>
  );
}

export default App;
