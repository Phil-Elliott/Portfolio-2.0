import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Navbar.scss";
import Pdf from "./Resume.pdf";

const Navbar = () => {
  const [navClass, setNavClass] = useState("nav-nav");
  const [open, setOpen] = useState(true);
  const linksRef = useRef(null);
  const q = gsap.utils.selector(linksRef);

  // Changes the nav to hamburger menu based off of page size
  const changeClass = () => {
    navClass === "nav-nav"
      ? setNavClass("nav-nav active-nav")
      : setNavClass("nav-nav");
    setOpen(!open);
  };

  // Animates the navbar links

  useEffect(() => {
    gsap.from(q(".link"), {
      duration: 0.5,
      opacity: 0,
      y: -50,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="navbar">
      <button href="#" className="toggle-button" onClick={changeClass}>
        <span className={open ? "bar1" : "bar1-open"}></span>
        <span className={open ? "bar2" : "bar2-open"}></span>
        <span className={open ? "bar3" : "bar3-open"}></span>
      </button>
      <ul className={navClass} ref={linksRef}>
        <li className="link">
          <a href="#about">About</a>
        </li>
        <li className="link">
          <a href="#skills">Skills</a>
        </li>
        <li className="link">
          <a href="#projects">Projects</a>
        </li>
        <li className="link">
          <a href="#contact">Contact</a>
        </li>
        <li className="link">
          <a className="resume-btn" href={Pdf} target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
