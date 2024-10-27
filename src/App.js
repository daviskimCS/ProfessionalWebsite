import React, { useRef, useState, useEffect } from "react"
// import { useInView, InView } from "react-intersection-observer"

// import React, { useRef , useEffect } from "react"

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

// import Projects from "./components/Projects.js";
import Project from "./components/Project.js"
import styles from "./styles/Projects.module.css"
import ThetaTau from "./styles/static/thetatauwebsite.gif"
import BopIt from "./styles/static/bopIt.png"
import Nommies from "./styles/static/nommies.gif"

function App() {
	const homeRef = useRef(null)
	const aboutRef = useRef(null)
	const skillRef = useRef(null)
	const projectRef = useRef(null)
	const experienceRef = useRef(null)
	const educationRef = useRef(null)
	const contactRef = useRef(null)

	const parallax = useRef(null)
	const scrollTo = (page) => {
		if (parallax.current) {
			parallax.current.scrollTo(page)
		}
	}

	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768)
		handleResize() // Initial check
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

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

				{isMobile ? (
					<div className="mobile-container">
						{/* <Particle id="particle" /> */}

						<Home ref={homeRef} />
						<div className="title">My Projects</div>
						<Project
							title="Theta Tau: Organization Website"
							image={ThetaTau}
						/>
						<Project
							title="Bop-it Remake: AVR Microcontroller Game"
							image={BopIt}
						/>
						<Project
							title="Nommies: Social Media Platform"
							image={Nommies}
						/>
						<Skill ref={skillRef} />
						<Education ref={educationRef} />
						<Experience ref={experienceRef} />
						<About ref={aboutRef} />
						<Contact ref={contactRef} />
					</div>
				) : (
					<div className="full-container">
						<Parallax ref={parallax} pages={7.65}>
							<ParallaxLayer offset={0} factor={1} speed={0.9}>
								<Particle id="particle" />
								<Home id="home" ref={homeRef}></Home>
								<img
									onClick={() => scrollTo(6.8)}
									src={arrow}
									alt="down arrow button"
									className="buttonContainer"
								></img>
							</ParallaxLayer>

							<ParallaxLayer
								className={styles.titleLayer}
								offset={1}
								factor={0.5}
							>
								<div className={styles.title}>My Projects</div>
							</ParallaxLayer>

							<ParallaxLayer
								className={styles.layer}
								offset={1.25}
								factor={0.6}
							>
								<div
									id="project"
									ref={projectRef}
									className={styles.projectContent}
								></div>

								<Project
									title={"Theta Tau: Organization Website"}
									image={ThetaTau}
									alt={
										"Picture of website that was developed"
									}
									technologies={[
										"React",
										"Node",
										"Firebase",
										"HTML",
										"CSS",
										"JavaScript",
										"Git",
									]}
									description={`
									<ul>
										<li>Developed a complete end-to-end full-stack application utilizing CSS, JavaScript, and ReactJS for the user interface.</li>
										<li>Implemented server-side functionality using Firebase and NodeJS.</li>
										<li>Facilitated development efforts as the scrum master in weekly meetings among a team of four.
											<ul>
												<li>Ensured internal deadlines were met.</li>
												<li>Overcame impediments.</li>
												<li>Promoted continuous improvement.</li>
											</ul>
										</li>
									</ul>
								`}
								/>
							</ParallaxLayer>
							<ParallaxLayer
								className={styles.layer}
								offset={1.9}
								factor={0.6}
							>
								<Project
									title={
										"Bop-it Remake: AVR Microcontroller Game"
									}
									image={BopIt}
									alt={
										"Picture of bop it remake game project"
									}
									technologies={["Cpp", "C", "Git"]}
									description={`
									<ul>
										<li>Developed an interactive game system with an AVR microcontroller using C/C++, integrating joystick, potentiometer, and infrared remote inputs.</li>
										<li>Optimized system responsiveness with a modular task scheduler managing multiple game states.</li>
										<li>Implemented state machines for random action selection, input validation, and feedback via RGB LEDs and a LiquidCrystal display.</li>
									</ul>
								`}
								/>
							</ParallaxLayer>
							<ParallaxLayer
								className={styles.layer}
								offset={2.55}
								factor={0.6}
							>
								<Project
									title={
										"Nommies: Social Media Platform for Food Lovers"
									}
									image={Nommies}
									alt={
										"Picture of bop it social media platform project"
									}
									technologies={[
										"React",
										"Node",
										"MongoDB",
										"Express",
										"GoogleAuth",
										"HTML",
										"CSS",
										"JavaScript",
										"Git",
									]}
									description={`
									<ul>
										<li>Developed a full-stack social media platform for sharing restaurant experiences using ReactJS, NodeJS, and MongoDB.</li>
										<li>Implemented Google Auth and email/password authentication for secure and flexible user login options.</li>
										<li>Designed features for personalized user profiles, restaurant search, and reviews, optimizing database queries for performance.</li>
									</ul>
								`}
								/>
							</ParallaxLayer>
							<ParallaxLayer offset={3.15} factor={1}>
								<Skill id="skill" ref={skillRef}></Skill>
							</ParallaxLayer>
							<ParallaxLayer offset={4.15} factor={0.15}>
								<Education ref={educationRef}></Education>
							</ParallaxLayer>
							<ParallaxLayer offset={4.65} factor={1}>
								<Experience ref={experienceRef}></Experience>
							</ParallaxLayer>
							<ParallaxLayer offset={5.8} factor={1}>
								<About id="about" ref={aboutRef}></About>
							</ParallaxLayer>
							<ParallaxLayer offset={6.8} factor={0.75}>
								<Contact ref={contactRef}></Contact>
							</ParallaxLayer>
						</Parallax>
					</div>
				)}
			</header>
		</div>
	)
}

export default App
