import React from "react"
import "./App.scss"
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import About from "./About/About"
import Skills from "./Skills/Skills"
import Projects from "./Projects/Projects"
import ExtraProjects from "./ExtraProjects/ExtraProjects"
import Contact from "./Contact/Contact"

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
  )
}

export default App

/*
  change pics to gif with one screen shot (will be clearer) - onhover
  change min-width of about section so its not moving 


*/
