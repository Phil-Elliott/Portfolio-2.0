import React, { useState, useRef, useEffect } from "react";
import "./Main.scss";
import { gsap } from "gsap";

const Main = () => {
  const linksRef = useRef();
  const q = gsap.utils.selector(linksRef);

  // Animates the navbar links

  useEffect(() => {
    gsap.from(q(".link"), {
      duration: 0.125,
      opacity: 0,
      y: 25,
      stagger: 0.1,
      // ease: "power3.out",
      delay: 1.5,
    });
  }, []);

  return (
    <div id="main" ref={linksRef}>
      <h1 className="link">Hi, my name is</h1>
      <h2 className="link">Phillip Elliott.</h2>
      <h3 className="link">I am a Front End Developer.</h3>
      <p className="link">
        <a href="mailto:PhillipPElliott@gmail.com">Get in touch</a>
      </p>
    </div>
  );
};

export default Main;
