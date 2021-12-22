import React from "react"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
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
