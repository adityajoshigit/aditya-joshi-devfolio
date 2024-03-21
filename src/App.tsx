import "./App.css";
import { Nav } from "./components";
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
      className="App"
      data-testid="mainApp">
      <Nav />
      <Home />
      <AboutMe />
      <Education />
      <WorkExp />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
