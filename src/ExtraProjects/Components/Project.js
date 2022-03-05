import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Project = ({ title, description, tech, github, site }) => {
  return (
    <div className="extra-card">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <ul>
          <li>{tech[0]}</li>
          <li>{tech[1]}</li>
          <li>{tech[2]}</li>
        </ul>
        <div className="icons">
          <a aria-label="Github" href={github}>
            <FaGithub className="icon" />
          </a>
          <a aria-label="Website" href={site}>
            <FaExternalLinkAlt className="icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
