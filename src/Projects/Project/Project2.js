import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Project2 = () => {
  return (
    <div className="project">
      <div className="project-info" style={{ alignItems: "flex-start" }}>
        <p className="project-heading">Featured Project</p>
        <a href="#">Quick Brew Website</a>
        <p className="project-description" style={{ textAlign: "left" }}>
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </p>
        <ul>
          <li>Sass</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostgreSQL</li>
        </ul>
        <div className="icons">
          <a href="https://github.com/Phil-Elliott/FitMax-Health-Dashboard">
            <FaGithub className="icon" />
          </a>
          <a href="https://github.com/Phil-Elliott/FitMax-Health-Dashboard">
            <FaExternalLinkAlt className="icon" />
          </a>
        </div>
      </div>
      <div className="gif"></div>
    </div>
  )
}

export default Project2
