import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Links.scss";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow placement="right" classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#112240",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#112240",
    color: "#a8b2d1",
    fontSize: "1.15rem",
  },
}));

const Links = () => {
  const linksRef = useRef(null);
  const q = gsap.utils.selector(linksRef);

  // Animates the navbar links

  useEffect(() => {
    gsap.from(q(".link"), {
      duration: 1,
      opacity: 0,
      y: 350,
      stagger: 0.2,
      ease: "power3.out",
      delay: 2.5,
    });
  }, []);

  return (
    <div className="links-container" ref={linksRef}>
      <div className="link">
        <StyledTooltip title="Email">
          <a aria-label="Email" href="mailto:PhillipPElliott@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </StyledTooltip>
        <StyledTooltip title="Github">
          <a aria-label="Github" href="https://github.com/Phil-Elliott">
            <FaGithub className="icon" />
          </a>
        </StyledTooltip>
        <StyledTooltip title="Linkedin">
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/phil-p-elliott/"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </StyledTooltip>
      </div>
      <span className="link"></span>
    </div>
  );
};

export default Links;
