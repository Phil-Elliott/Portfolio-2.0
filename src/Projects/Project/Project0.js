import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import img from "./screenshot-pm-app.png";
import { SimpleAnimate } from "../../functions/Gsap";
import { StyledTooltip } from "../../functions/Tooltip";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project3 = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    SimpleAnimate(projectRef.current);
  }, []);

  return (
    <div className="project gif-left" ref={projectRef}>
      <div className="gif-container">
        <a href="https://phil-elliott.github.io/Project_Management-App/">
          <img className="gif" alt="portfolio" src={img} />
        </a>
      </div>
      <div className="project-info">
        <p className="project-heading">Featured Project</p>
        <a href="https://phil-elliott.github.io/Project_Management-App/">
          Project Management App
        </a>
        <div className="description-container">
          <p className="project-description">
            A React application used to track tasks within a project. The user
            has the ability to create projects, create tasks, and follow the
            progress being made.
          </p>
        </div>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Redux</li>
          <li>SCSS</li>
        </ul>
        <div className="icons">
          <StyledTooltip title="Github">
            <a
              aria-label="Github"
              href="https://github.com/Phil-Elliott/Project_Management-App"
            >
              <FaGithub className="icon" />
            </a>
          </StyledTooltip>
          <StyledTooltip title="Website">
            <a
              aria-label="Website"
              href="https://phil-elliott.github.io/Project_Management-App/"
            >
              <FaExternalLinkAlt className="icon" />
            </a>
          </StyledTooltip>
        </div>
      </div>
    </div>
  );
};

export default Project3;
