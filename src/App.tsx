import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import navigationItems from "./data/navigationItems";
import { Nav } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          {navigationItems.map(({ to, element }) => (
            <Route
              path={to}
              element={element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
