import React, { useRef, useEffect } from "react";
import "./Projects.scss";
import Project0 from "./Project/Project0";
import Project1 from "./Project/Project1";
import Project2 from "./Project/Project2";
import Project3 from "./Project/Project3";
import { SimpleAnimate } from "../functions/Gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectTitleRef = useRef(null);

  useEffect(() => {
    SimpleAnimate(projectTitleRef.current);
  }, []);

  return (
    <div id="projects">
      <div className="heading" ref={projectTitleRef}>
        <h2>Some Things I’ve Built</h2>
        <span></span>
      </div>
      <Project0 />
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
  );
};

export default Projects;
