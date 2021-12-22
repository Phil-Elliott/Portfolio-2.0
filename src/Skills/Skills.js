import React from "react"
import "./Skills.scss"
import { FaHtml5, FaCss3, FaReact, FaNode, FaSass, FaJs } from "react-icons/fa"

const Skills = () => {
  return (
    <div id="skills">
      <h1>My Skills</h1>
      <div className="logos">
        <FaHtml5 className="logo-set1" />
        <FaCss3 className="logo-set1" />
        <FaReact className="logo-set2 react" />
        <FaNode className="logo-set2 node" />
        <FaSass className="logo-set2 sass" />
        <FaJs className="logo-set1" />
        <p className="logo-set3 express">Express</p>
        <p className="logo-set3 post">PostgreSQL </p>
        <p className="logo-set3 es6">ES6 </p>
      </div>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Node</li>
        <li>Express</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  )
}

export default Skills
