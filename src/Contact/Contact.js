import React, { useState, useRef, useEffect } from "react";
import "./Contact.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Animate } from "../functions/Gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const q = gsap.utils.selector(contactRef);

  useEffect(() => {
    Animate(contactRef.current, q);
  }, []);

  return (
    <div id="contact" ref={contactRef}>
      <h1 className="animate">What's Next?</h1>
      <h2 className="animate">Get In Touch</h2>
      <p className="animate">
        I am currently looking for a position, where I will be able to provide
        value and improve my programming skills. Feel free to send me an email
        in regards to any opportunities.
      </p>
      <p className="contact-btn animate">
        <a href="mailto:PhillipPElliott@gmail.com">Contact Me</a>
      </p>
      <div className="contact-links">
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
    </div>
  );
};

export default Contact;
