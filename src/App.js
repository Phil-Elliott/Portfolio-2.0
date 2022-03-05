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
  Structure 
    1) Navbar 
      - About 
      - Skills 
      - Projects 
      - Contact 
      - Resume button 
    2) Main Page 
      - Cool header 
      - Hire me button (Jumps to the contact Page ) 
        Wait for later on below 
      - Email on right side 
      - Socials on other side 
    3) About 
      - Short and sweet 
        - Highlight degree and teaching experience 
        - Talk a little about your passion for this career path 
    4) Skills 
      - Copy one of the two that you were looking at earlier 

          -Html 
          -CSS
          -JS
          -React
          -Node
          - Express
          - PostGresql
          -Sass
          - MUI

    5) Projects 
      - Copy the same format as hers 
        - Have gif videos on the left 
    6) Contact 
      - Have a contact area 
        - copy someone elses 
        - Have it sent to me 
    
    extra
      - add google analytics 
      - change scrollbar on right

*/
