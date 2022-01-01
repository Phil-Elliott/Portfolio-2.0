import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import fitmax from "./fitmax.gif"

const Project1 = () => {
  return (
    <div className="project">
      <div className="gif">
        <img className="gif" alt="fitmax" src={fitmax} />
      </div>
      <div className="project-info">
        <p className="project-heading">Featured Project</p>
        <a href="https://fitmax.herokuapp.com">FitMax Health App</a>
        <p className="project-description">
          A fitness app that keeps a record of the user's cardio activities and
          goals. Includes user authentication and a database to keep records of
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
          <a href="https://fitmax.herokuapp.com">
            <FaExternalLinkAlt className="icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project1
