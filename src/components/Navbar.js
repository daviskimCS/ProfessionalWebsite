import React, { useState, useEffect } from "react"
import styles from "../styles/Navbar.module.css"
// import ScrollIntoView from "react-scroll-into-view"

const Navbar = ({ scrollTo, refs }) => {
	const [selectedLink, setSelectedLink] = useState("home")

	useEffect(() => {
		const sections = [
			{ id: "home", position: 0 },
			{ id: "project", position: 0.95 },
			{ id: "skill", position: 3.15 },
			{ id: "education", position: 4.15 },
			{ id: "experience", position: 4.65 },
			{ id: "about", position: 5.8 },
			{ id: "contact", position: 6.8 },
		]

		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.6,
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setSelectedLink(entry.target.id)
				}
			})
		}, observerOptions)

		sections.forEach(({ id }) => {
			const sectionElement = document.getElementById(id)
			if (sectionElement) {
				observer.observe(sectionElement)
			}
		})

		return () => {
			sections.forEach(({ id }) => {
				const sectionElement = document.getElementById(id)
				if (sectionElement) {
					observer.unobserve(sectionElement)
				}
			})
		}
	}, [])

	const handleLinkClick = (link, position) => {
		setSelectedLink(link)
		scrollTo(position)
	}

	// const handleLinkClick = (link) => {
	// 	setSelectedLink(link)
	// 	scrollTo(refs[`${link}Ref`])
	// }

	return (
		<nav className={styles.navBar}>
			<div
				className={`${styles.navItem} ${selectedLink === "home" ? styles.selected : ""}`}
			>
				<a
					href="#home"
					className={styles.navLink}
					// onClick={(e) => {
					// 	e.preventDefault()
					// 	handleLinkClick("home")
					// }}
					onClick={() => {
						scrollTo(0)
						setSelectedLink("home")
					}}
				>
					Home
				</a>
			</div>
			<div
				className={`${styles.navItem} ${selectedLink === "project" ? styles.selected : ""}`}
			>
				<a
					href="#project"
					className={styles.navLink}
					onClick={() => {
						scrollTo(0.95)
						setSelectedLink("project")
					}}

					// onClick={(e) => {
					// 	e.preventDefault()
					// 	handleLinkClick("project")
					// }}
				>
					Projects
				</a>
			</div>
			<div
				className={`${styles.navItem} ${selectedLink === "skill" ? styles.selected : ""}`}
			>
				<a
					href="#skill"
					className={styles.navLink}
					// onClick={(e) => {
					// 	e.preventDefault()
					// 	handleLinkClick("skill")
					// }}
					onClick={() => {
						scrollTo(3.15)
						setSelectedLink("skill")
					}}
				>
					Skills
				</a>
			</div>
			<div
				className={`${styles.navItem} ${selectedLink === "education" ? styles.selected : ""}`}
			>
				<a
					href="#education"
					className={styles.navLink}
					// onClick={(e) => {
					// 	e.preventDefault()
					// 	handleLinkClick("education")
					// }}
					onClick={() => {
						scrollTo(4.15)
						setSelectedLink("education")
					}}
				>
					Education
				</a>
			</div>
			<div
				className={`${styles.navItem} ${selectedLink === "experience" ? styles.selected : ""}`}
			>
				<a
					href="#experience"
					className={styles.navLink}
					// onClick={(e) => {
					// 	e.preventDefault()
					// 	handleLinkClick("experience")
					// }}
					onClick={() => {
						scrollTo(4.65)
						setSelectedLink("experience")
					}}
				>
					Experience
				</a>
			</div>
			<div
				className={`${styles.navItem} ${selectedLink === "about" ? styles.selected : ""}`}
			>
				<a
					href="#about"
					className={styles.navLink}
					// onClick={(e) => {
					// 	e.preventDefault()
					// 	handleLinkClick("about")
					// }}
					onClick={() => {
						scrollTo(5.8)
						setSelectedLink("about")
					}}
				>
					About
				</a>
			</div>
			<div
				className={`${styles.navItem} ${selectedLink === "contact" ? styles.selected : ""}`}
			>
				<a
					href="#contact"
					className={styles.navLink}
					// onClick={(e) => {
					// 	e.preventDefault()
					// 	handleLinkClick("contact")
					// }}
					onClick={() => {
						scrollTo(6.8)
						setSelectedLink("contact")
					}}
				>
					Contact
				</a>
			</div>
		</nav>
	)
}

export default Navbar
