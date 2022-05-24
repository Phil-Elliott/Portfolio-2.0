import React from "react";
import "./Links.scss";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

const Links = () => {
  return (
    <div className="links-container">
      <div>
        <a aria-label="Email" href="mailto:PhillipPElliott@gmail.com">
          <FaEnvelope className="icon" />
        </a>
        <a aria-label="Github" href="https://github.com/Phil-Elliott">
          <FaGithub className="icon" />
        </a>
        <a
          aria-label="Linkedin"
          href="https://www.linkedin.com/in/phil-p-elliott/"
        >
          <FaLinkedinIn className="icon" />
        </a>
      </div>
      <span></span>
    </div>
  );
};

export default Links;

// Add links to eamil, gethub, linkedin (right bottom - maybe have go down screen)
// get a span line under the icons
// get animations
