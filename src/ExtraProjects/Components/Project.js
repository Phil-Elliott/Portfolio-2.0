import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { StyledTooltip } from "../../functions/Tooltip";

const Project = ({ title, description, tech, github, site }) => {
  return (
    <div className="extra-card">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <ul>
          <li>{tech[0]}</li>
          <li>{tech[1]}</li>
          <li>{tech[2]}</li>
        </ul>
        <div className="icons">
          <StyledTooltip title="Github">
            <a aria-label="Github" href={github}>
              <FaGithub className="icon" />
            </a>
          </StyledTooltip>
          <StyledTooltip title="Website">
            <a aria-label="Website" href={site}>
              <FaExternalLinkAlt className="icon" />
            </a>
          </StyledTooltip>
        </div>
      </div>
    </div>
  );
};

export default Project;
