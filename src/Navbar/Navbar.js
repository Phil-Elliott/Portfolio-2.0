import React, { useState } from "react"
import "./Navbar.scss"

const Navbar = () => {
  const [navClass, setNavClass] = useState("nav-nav")

  // Changes the nav to hamburger menu based off of page size
  const changeClass = () => {
    navClass === "nav-nav"
      ? setNavClass("nav-nav active-nav")
      : setNavClass("nav-nav")
  }

  return (
    <div className="navbar">
      <button href="#" className="toggle-button" onClick={changeClass}>
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </button>
      <ul className={navClass}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#" className="resume-btn">
            Resume
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
