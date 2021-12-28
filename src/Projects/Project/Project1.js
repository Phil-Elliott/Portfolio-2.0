import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Project1 = () => {
  return (
    <div className="project">
      <div className="gif"></div>
      <div className="project-info">
        <p className="project-heading">Featured Project</p>
        <a href="#">FitMax Health App</a>
        <p className="project-description">
          A fitness app that keeps a record of the users cardio activities and
          goals. Includes user authenification and a database to keep records of
          all cardio activities.
        </p>
        <ul>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sass</li>
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
    </div>
  )
}

export default Project1
