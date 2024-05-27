import React from "react"
import styles from "../styles/Projects.module.css"
import Project from "./Project.js"
import ThetaTau from "../styles/static/ThetaTau.png"
import { Parallax , ParallaxLayer } from "@react-spring/parallax"

const ProjectsList = [
  {
    title: "Organization Website",
    image: ThetaTau,
    alt: "Picture of organization website",
    technologies: "git",
    description:
      "Develop a complete end to end full-stack application utilizing CSS, JavaScript, and ReactJS for the user interface along with Firebase and NodeJS for server-side functionality. Facilitate development efforts as the scrum master in weekly meetings among team of 4 to meet internal deadlines, overcome impediments, and promote continuous improvement.",
    button: "https://www.thetatauucr.com/",
  },
  {
    title: "Organization Website",
    image: ThetaTau,
    alt: "Picture of organization website",
    technologies: "git",
    description: "LOTS OF TEXt lots oF TeXT lots of TEXT ",
    button: "https://www.thetatauucr.com/",
  },
  {
    title: "Organization Website",
    image: ThetaTau,
    alt: "Picture of organization website",
    technologies: "git",
    description: "LOTS OF TEXt lots oF TeXT lots of TEXT ",
    button: "https://www.thetatauucr.com/",
  },
]

const Projects = React.forwardRef((props, ref) => {
  return (
    <div id="project" ref={ref} className={styles.projectContent}>
      SAD
      <div className={styles.title}>My Projects</div>
      <Parallax className={styles.parallax} pages={2}>
        <ParallaxLayer offset={0} factor={1}>
          {/* <div className={styles.inner}> */}
            <Project
              title={"TT"}
              image={ThetaTau}
              alt={"none"}
              technologies={"tech"}
              description={"DESC"}
            />
          {/* </div> */}
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1}>
          <div className={styles.inner}>GELlo 2</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
})

export default Projects

// {
//   /* <Project
//   // key={1}}
//   title={"TT"}
//   image={ThetaTau}
//   alt={"none"}
//   technologies={"tech"}
//   description={"DESC"}
// /> */
// }

// <Parallax className="parallax" pages={1}>
//           {/* {ProjectsList.map((project, index) => (
//             <ParallaxLayer className={styles.inner} offset={0} factor={1}>
//               <Project
//                 key={index}
//                 title={project.title}
//                 image={project.image}
//                 alt={project.alt}
//                 technologies={project.technologies}
//                 description={project.description}
//                 button={project.button}
//               />
//             </ParallaxLayer>
//           ))} */}
//           <ParallaxLayer offset={0} factor={1}>
//             HELLO
//             <Project
//               // key={1}}
//               title={"TT"}
//               image={ThetaTau}
//               alt={"none"}
//               technologies={"tech"}
//               description={"DESC"}
//             />
//           </ParallaxLayer>
//         </Parallax>
