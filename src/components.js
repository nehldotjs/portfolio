import React from "react";
// COMPONENTS

import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";

// FUNCTIONS
function Components() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Components;
