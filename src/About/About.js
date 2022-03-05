import React, { useState } from "react"
import "./About.scss"

const About = () => {
  const [dataNum, setDataNum] = useState(0)

  const dataArr = [
    {
      par1: "Hello! My name is Phil and I have recently discovered my passion for programming. This has led me on a journey to start a career in web development. I have been very busy learning and gaining the skills that will allow me to provide value at a company. This process has been quite enjoyable and I can't even imagine how fulfilling a career as a developer will be.",
    },
    {
      par1: "I have a background in business and teaching. I received my bachelors in business in 2016. I then spent the majority of the past six years, teaching children overseas, in schools or online. These past experiences have provided me with many transferable skills that will pair well with a career in this field.",
    },
    {
      par1: "I am very comfortable working with different frontend software. I am able to use CSS or Sass to build out different designs. I have a little experience with Bootstrap and Material UI, but I look forward to getting an opportunity to use them more. I also really enjoy working in React to build single page applications. I can work with both class components and functional components.",
    },
    {
      par1: "I have not spent a lot of time learning how to work with backend software. I have learned enough to get a grasp on how everything works and what is needed on the backend. I have learned how to build a basic API in Node, while using Express. I have also been able to learn how to build a database in PostgreSQL. I know I still have a lot to learn, but I am looking forward to it.",
    },
  ]

  return (
    <div id="about">
      <div className="heading">
        <h2>About Me</h2>
        <span></span>
      </div>
      <div className="about-content-container">
        <div className="about-tags">
          <p
            className={dataNum === 0 ? "active" : "notActive"}
            onClick={() => setDataNum(0)}
          >
            About
          </p>
          <p
            className={dataNum === 1 ? "active" : "notActive"}
            onClick={() => setDataNum(1)}
          >
            Background
          </p>
          <p
            className={dataNum === 2 ? "active" : "notActive"}
            onClick={() => setDataNum(2)}
          >
            Front-End
          </p>
          <p
            className={dataNum === 3 ? "active" : "notActive"}
            onClick={() => setDataNum(3)}
          >
            Back-End
          </p>
        </div>
        <div className="about-content">
          <p>{dataArr[dataNum].par1}</p>
          <p>{dataArr[dataNum].par2}</p>
        </div>
      </div>
    </div>
  )
}

export default About
