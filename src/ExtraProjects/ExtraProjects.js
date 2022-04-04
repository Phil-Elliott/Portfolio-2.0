import React from "react"
import "./ExtraProjects.scss"
import Project from "./Components/Project"

const ExtraProjects = () => {
  const dataArr = [
    {
      title: "CRYPTO Landing Page",
      description:
        "An interactive and dynamic landing page. It is connected to the CoinGecko API that pulls data from the top five crypto currencies. It is also displays current exchange rates.",
      tech: ["HTML", "Scss", "JavaScript"],
      github: "https://github.com/Phil-Elliott/Crypto-landing-page",
      site: "https://phil-elliott.github.io/Crypto-landing-page/",
    },
    {
      title: "ELANOR Cars Landing Page",
      description:
        "An interactive and dynamic landing page using React and styled components. I copied the design from Figma. It is fully responsive for all devices.",
      tech: ["React", "Styled Components", "GSAP"],
      github: "https://github.com/Phil-Elliott/Animated-Landing-Page",
      site: "https://phil-elliott.github.io/Animated-Landing-Page/",
    },
    {
      title: "BestBuy Email Clone",
      description:
        "A clone of an HTML email. It is fully responsive and works on all devices.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Phil-Elliott/BestBuy-email-clone",
      site: "https://phil-elliott.github.io/BestBuy-email-clone/",
    },
    {
      title: "Robinhood Email Clone",
      description:
        "A clone of an HTML email. It is fully responsive and works on all devices.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Phil-Elliott/Robinhood-email-clone",
      site: "https://phil-elliott.github.io/Robinhood-email-clone/",
    },
    {
      title: "Nintendo Email Clone",
      description:
        "A clone of an HTML email. It is fully responsive and works on all devices.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Phil-Elliott/Nintendo-email-clone",
      site: "https://phil-elliott.github.io/Nintendo-email-clone/",
    },
  ]

  return (
    <div id="extra-projects">
      <div className="extra-heading">
        <h1>Other Projects</h1>
      </div>
      <div className="extra-content-container">
        {dataArr.map((item, i) => {
          return (
            <Project
              key={item.title}
              title={item.title}
              description={item.description}
              tech={item.tech}
              github={item.github}
              site={item.site}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ExtraProjects

/*  
    1) header 
    3) Tech used 
    4) Links and description on back when hover 


*/
