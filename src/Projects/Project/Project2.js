import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import fitmax from "./FitMax.png";
import { StyledTooltip } from "../../functions/Tooltip";
import { SimpleAnimate } from "../../functions/Gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    SimpleAnimate(projectRef.current);
  }, []);

  return (
    <div className="project gif-left" ref={projectRef}>
      <div className="gif-container">
        <a href="https://fitmax.herokuapp.com">
          <img className="gif" alt="fitmax" src={fitmax} />
        </a>
      </div>
      <div className="project-info">
        <p className="project-heading">Featured Project</p>
        <a href="https://fitmax.herokuapp.com">FitMax Health App</a>
        <div className="description-container">
          <p className="project-description">
            The application has been deployed on Heroku, so it could take a
            little while to load. You can create your own account or use the
            account and password below.
            <br />
            'user@gmail.com' 'password123'
          </p>
        </div>
        <ul>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sass</li>
        </ul>
        <div className="icons">
          <StyledTooltip title="Github">
            <a
              aria-label="Github"
              href="https://github.com/Phil-Elliott/FitMax-Health-Dashboard"
            >
              <FaGithub className="icon" />
            </a>
          </StyledTooltip>
          <StyledTooltip title="Website">
            <a aria-label="Website" href="https://fitmax.herokuapp.com">
              <FaExternalLinkAlt className="icon" />
            </a>
          </StyledTooltip>
        </div>
      </div>
    </div>
  );
};

export default Project1;
