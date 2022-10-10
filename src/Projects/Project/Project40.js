import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import gif from "./animated-landing.gif"

const Project4 = () => {
  return (
    <div className="project gif-right">
      <div className="project-info" style={{ alignItems: "flex-start" }}>
        <p className="project-heading">Featured Project</p>
        <a href="https://phil-elliott.github.io/Animated-Landing-Page/">
          ELANOR Cars Landing Page
        </a>
        <div className="description-container">
          <p className="project-description" style={{ textAlign: "left" }}>
            An interactive and dynamic landing page using React and styled
            components. I copied the design from Figma. It is fully responsive
            for all devices.
          </p>
        </div>
        <ul>
          <li>React</li>
          <li>Styled Components</li>
          <li>GSAP</li>
        </ul>
        <div className="icons">
          <a
            aria-label="Github"
            href="https://github.com/Phil-Elliott/Animated-Landing-Page"
          >
            <FaGithub className="icon" />
          </a>
          <a
            aria-label="Website"
            href="https://phil-elliott.github.io/Animated-Landing-Page/"
          >
            <FaExternalLinkAlt className="icon" />
          </a>
        </div>
      </div>
      <div>
        <img className="gif" alt="portfolio" src={gif} />
      </div>
    </div>
  )
}

export default Project4
