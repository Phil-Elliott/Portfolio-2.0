import React from "react"
import "./Skills.scss"
import { FaHtml5, FaCss3, FaReact, FaNode, FaSass, FaJs } from "react-icons/fa"

const Skills = () => {
  return (
    <div id="skills">
      <h1>My Skills</h1>
      <div className="logos">
        <FaHtml5 className="logo-set1 html" />
        <FaCss3 className="logo-set1 css" />
        <FaReact className="logo-set2 react" />
        <FaNode className="logo-set2 node" />
        <FaSass className="logo-set2 sass" />
        <FaJs className="logo-set1 js" />
        <p className="logo-set3 express">TypeScript</p>
        <p className="logo-set3 post">Redux </p>
        <p className="logo-set3 es6">ES6 </p>
      </div>
    </div>
  )
}

export default Skills
