import React from "react";
import "./App.scss";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ExtraProjects from "./ExtraProjects/ExtraProjects";
import Contact from "./Contact/Contact";
import Links from "./Links/Links";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Links />
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
  
  learn ssh
  add images to resume
  setup windows OS
    get everything ready for vs code
    get gitbash 
    get putty for ssh




  1) Add animations to dropdown menu
  2) Add links to eamil, gethub, linkedin (right bottom - maybe have go down screen)
  3) Make skills move on hover 
  4) Fix responsiveness
  5) Upload new portfolio


  // make pe book animation at loader 
// Add photoshopped images to resume

add animations to links
center title on main page

need to put left links inside of dropdown responsive




1) 1300 to 900 move farther left 
2) Then move github and linkedin to the bottom 
3) Add hove words to each button on screen - project links

*/
