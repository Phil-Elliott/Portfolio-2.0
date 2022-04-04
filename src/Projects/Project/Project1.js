import React, { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import news from "./news-screenshot.png"
import gif from "./News.gif"

const Project0 = () => {
  return (
    <div className="project gif-right">
      <div className="project-info" style={{ alignItems: "flex-start" }}>
        <p className="project-heading">Featured Project</p>
        <a href="https://pedantic-bhabha-23f3dd.netlify.app/">News App</a>
        <div className="description-container">
          <p className="project-description" style={{ textAlign: "left" }}>
            A news application that is connected to the Guardian API. It
            provides the user with a variety of news tags to choose from. There
            is also a search bar to use to find specific news articles.
          </p>
        </div>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Sass</li>
        </ul>
        <div className="icons">
          <a
            aria-label="Github"
            href="https://github.com/Phil-Elliott/News-Website"
          >
            <FaGithub className="icon" />
          </a>
          <a
            aria-label="Website"
            href="https://pedantic-bhabha-23f3dd.netlify.app/"
          >
            <FaExternalLinkAlt className="icon" />
          </a>
        </div>
      </div>
      <div className="gif-container">
        <a href="https://pedantic-bhabha-23f3dd.netlify.app/">
          <img className="gif" alt="portfolio" src={news} />
        </a>
      </div>
    </div>
  )
}

export default Project0
