import React from "react"
import "./Projects.scss"
import Project0 from "./Project/Project0"
import Project1 from "./Project/Project1"
import Project2 from "./Project/Project2"
import Project3 from "./Project/Project3"
import Project4 from "./Project/Project4"

const Projects = () => {
  return (
    <div id="projects">
      <div className="heading">
        <h2>Some Things I’ve Built</h2>
        <span></span>
      </div>
      <Project0 />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
    </div>
  )
}

export default Projects
