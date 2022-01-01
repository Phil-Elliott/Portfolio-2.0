import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import quickbrew from "./quickbrew.gif"

const Project2 = () => {
  return (
    <div className="project">
      <div className="project-info" style={{ alignItems: "flex-start" }}>
        <p className="project-heading">Featured Project</p>
        <a href="https://quick-brew.herokuapp.com">Quick Brew Website</a>
        <p className="project-description" style={{ textAlign: "left" }}>
          A website made for a coffee shop. Provides the user with information
          and an interactive user interface. Also includes a shop that is
          connected to stripe.
        </p>
        <ul>
          <li>React</li>
          <li>Sass</li>
          <li>Commerce.js</li>
          <li>Stripe</li>
          <li>Material UI</li>
        </ul>
        <div className="icons">
          <a href="https://github.com/Phil-Elliott/CoffeeShop-React">
            <FaGithub className="icon" />
          </a>
          <a href="https://quick-brew.herokuapp.com">
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
