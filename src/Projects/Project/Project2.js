import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import quickbrew from "./quickbrew.gif"

const Project2 = () => {
  return (
    <div className="project gif-right">
      <div className="project-info" style={{ alignItems: "flex-start" }}>
        <p className="project-heading">Featured Project</p>
        <a href="https://quick-brew.herokuapp.com">Quick Brew Website</a>
        <div className="description-container">
          <p className="project-description" style={{ textAlign: "left" }}>
            The application has been deployed on Heroku, so it could take a
            little while to load. If you would like to try to make a payment,
            then you can use the demo card '4242-4242-4242-4242'.
          </p>
        </div>
        <ul>
          <li>React</li>
          <li>Sass</li>
          <li>Commerce.js</li>
          <li>Stripe</li>
          <li>Material UI</li>
        </ul>
        <div className="icons">
          <a
            aria-label="Github"
            href="https://github.com/Phil-Elliott/CoffeeShop-React"
          >
            <FaGithub className="icon" />
          </a>
          <a aria-label="Website" href="https://quick-brew.herokuapp.com">
            <FaExternalLinkAlt className="icon" />
          </a>
        </div>
      </div>
      <div>
        <img className="gif" alt="portfolio" src={quickbrew} />
      </div>
    </div>
  )
}

export default Project2
