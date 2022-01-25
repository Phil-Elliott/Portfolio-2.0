import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Crypto from "./CRYPTO.gif"

const Project3 = () => {
  return (
    <div className="project gif-left">
      <div>
        <img className="gif" alt="portfolio" src={Crypto} />
      </div>
      <div className="project-info">
        <p className="project-heading">Featured Project</p>
        <a href="https://phil-elliott.github.io/Crypto-landing-page/">
          CRYPTO Landing Page
        </a>
        <div className="description-container">
          <p className="project-description">
            An interactive and dynamic landing page. It is connected to the Coin
            Gecko API that pulls data from the top five crypto currencies. It is
            also connected to the Alpha Advantage API to show exchange rates.
          </p>
        </div>
        <ul>
          <li>HTML</li>
          <li>Sass</li>
          <li>JavaScript</li>
        </ul>
        <div className="icons">
          <a
            aria-label="Github"
            href="https://github.com/Phil-Elliott/Crypto-landing-page"
          >
            <FaGithub className="icon" />
          </a>
          <a
            aria-label="Website"
            href="https://phil-elliott.github.io/Crypto-landing-page/"
          >
            <FaExternalLinkAlt className="icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project3
