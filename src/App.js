// import React, { useRef, useState, useEffect } from "react"
// import { useInView, InView } from "react-intersection-observer"

import React, { useRef } from "react"

import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import Particle from "./components/Particles.js"
import Skill from "./components/Skill.js"
import Experience from "./components/Experience.js"
import Education from "./components/Education.js"
import Contact from "./components/Contact.js"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import "./App.css"
import arrow from "./styles/static/downArrow.png"

//Had to move projects to avoid parallax within parallax problems that arose T_T
// import Projects from "./components/Projects.js";
import Project from "./components/Project.js"
import styles from "./styles/Projects.module.css"
import ThetaTau from "./styles/static/ThetaTau.png"
import CombatChaos from "./styles/static/combatChaos.png"

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const experienceRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // const [visibleSection, setVisibleSection] = useState(refs[0])

  // const refs = [
  //   homeRef,
  //   aboutRef,
  //   skillRef,
  //   projectRef,
  //   experienceRef,
  //   educationRef,
  //   contactRef,
  // ]

  // const setInView = (inView, entry) => {
  //   if (inView) {
  //     setVisibleSection(entry.target.getAttribute("id"))
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          scrollTo={scrollTo}
          refs={{
            homeRef,
            aboutRef,
            skillRef,
            projectRef,
            experienceRef,
            educationRef,
            contactRef,
          }}
        ></Navbar>
        <div className="full-container">
          <Parallax pages={6.8}>
            <ParallaxLayer offset={0} factor={1} speed={1.5}>
              {/* <InView onChange={setInView} threshold={0.8}> */}
              <Particle id="particle" />
              <Home id="home" ref={homeRef}></Home>
              <img
                onClick={() => scrollTo(aboutRef)}
                src={arrow}
                alt="down arrow button"
                className="buttonContainer"
              ></img>
              {/* </InView> */}
            </ParallaxLayer>
            <ParallaxLayer
              className={styles.titleLayer}
              sticky={{ start: 1, end: 2.375 }}
              offset={1}
              factor={0.25}
              speed={1.2}
            >
              <div className={styles.title}>My Projects</div>
            </ParallaxLayer>
            <ParallaxLayer
              className={styles.layer}
              offset={1.4}
              factor={0.5}
              speed={0.5}
            >
              <div
                id="project"
                ref={projectRef}
                className={styles.projectContent}
              ></div>

              <Project
                title={"Theta Tau: Organization Website"}
                image={ThetaTau}
                alt={"Picture of website that was developed"}
                technologies={"React, Node, Firebase"}
                description={
                  "Developed a complete end-to-end full-stack application utilizing CSS, JavaScript, and ReactJS for the user interface. Implemented server-side functionality using Firebase and NodeJS. Facilitated development efforts as the scrum master in weekly meetings among a team of four, ensuring internal deadlines were met, impediments were overcome, and continuous improvement was promoted."
                }
              />
            </ParallaxLayer>
            <ParallaxLayer
              className={styles.layer}
              offset={2}
              factor={0.5}
              speed={0.5}
            >
              <Project
                title={"Combat Chaos"}
                image={CombatChaos}
                alt={"Picture of game project"}
                technologies={"C++, CMAKE"}
                description={
                  "Designed four stages, each featuring four distinct difficulty levels, five purchasable items, and four enemies using C++. Collaborated with a team of four developers, managing the project through GitHub and implementing SOLID design and object-oriented programming principles to ensure code maintainability and extensibility. Utilized Googletest and Valgrind to identify and rectify code issues, achieving a memory leak-free program."
                }
              />
            </ParallaxLayer>
            <ParallaxLayer offset={2.5}>
              <Skill id="skill" ref={skillRef}></Skill>
            </ParallaxLayer>
            <ParallaxLayer offset={3.35}>
              <Education ref={educationRef}></Education>
            </ParallaxLayer>
            <ParallaxLayer offset={4}>
              <Experience ref={experienceRef}></Experience>
            </ParallaxLayer>
            <ParallaxLayer offset={5.15} factor={1}>
              <About id="about" ref={aboutRef}></About>
            </ParallaxLayer>
            <ParallaxLayer offset={6}>
              <Contact ref={contactRef}></Contact>
            </ParallaxLayer>
          </Parallax>
        </div>
      </header>
    </div>
  )
}

export default App
