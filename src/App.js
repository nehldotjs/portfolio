import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Essentials from "./context/Essentials";
import ProjectsContext from "./context/ProjectsContext";
// COMPONENTS
import BackgroundAnimation from "./BackgroundAnimation";
import Components from "./components";
import CaseStudy from "./components/otherScreens/caseStudy";

// FUNCTIONS
function App() {
  return (
    <>
      <BackgroundAnimation />
      <>
        <Essentials>
          <ProjectsContext>
            <Router>
              <Routes>
                <Route path="/nehl" exact element={<Components />} />
                <Route path="/ProjectStudy" element={<CaseStudy />} />
              </Routes>
            </Router>
          </ProjectsContext>
        </Essentials>
      </>
    </>
  );
}

export default App;
