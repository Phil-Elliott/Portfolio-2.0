import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import portfolio from "./portfolio.gif"

const Project3 = () => {
  return (
    <div className="project">
      <div>
        <img className="gif" alt="portfolio" src={portfolio} />
      </div>
      <div className="project-info">
        <p className="project-heading">Featured Project</p>
        <a href="#">Portfolio</a>
        <p className="project-description">
          A website built on React. Used Sass to create a clean and user
          friendly design. I utilized media queries to make the website fully
          responsive on all devices.
        </p>
        <ul>
          <li>React</li>
          <li>Sass</li>
        </ul>
        <div className="icons">
          <a href="https://github.com/Phil-Elliott/Portfolio-2.0">
            <FaGithub className="icon" />
          </a>
          <a href="https://github.com/Phil-Elliott/Portfolio-2.0">
            <FaExternalLinkAlt className="icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project3
