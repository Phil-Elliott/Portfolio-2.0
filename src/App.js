import React from "react";
import "./App.scss";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ExtraProjects from "./ExtraProjects/ExtraProjects";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <ExtraProjects />
      <Contact />
    </div>
  );
};

export default App;

/*
  1) Add animations to dropdown menu
  1 part 2) Make navbar sticky
  2) Add links to eamil, gethub, linkedin (right bottom - maybe have go down screen)
  3) Make skills move on hover 
  4) Fix responsiveness
  5) Upload new portfolio


*/
