import React from "react"
import styles from "../styles/Project.module.css"
import cpp from "../styles/static/cppLogo.png"
import python from "../styles/static/pythonLogo.png"
import js from "../styles/static/jsLogo.png"
import css from "../styles/static/cssLogo.png"
import html from "../styles/static/htmlLogo.png"
import swift from "../styles/static/swiftLogo.png"
import swiftUI from "../styles/static/swiftUILogo.png"
import express from "../styles/static/expressLogo.png"
import node from "../styles/static/nodeLogo.png"
import react from "../styles/static/reactLogo.png"
import rust from "../styles/static/rustLogo.png"
import git from "../styles/static/gitLogo.png"
import firebase from "../styles/static/firebaseLogo.png"

const techLogos = {
	Cpp: cpp,
	Python: python,
	JavaScript: js,
	CSS: css,
	HTML: html,
	Swift: swift,
	SwiftUI: swiftUI,
	Node: node,
	React: react,
	Rust: rust,
	Git: git,
	Firebase: firebase,
	Express: express,
}

const Project = ({ title, image, technologies, description, button }) => {
	const techArray = Array.isArray(technologies) ? technologies : []

	return (
		<a
			href="https://www.thetatauucr.com"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className={styles.projectContainer}>
				<div className={styles.topInfo}>
					<div className={styles.title}>{title}</div>
					<div className={styles.techIcons}>
						{techArray.map((tech, index) => (
							<img
								key={index}
								src={techLogos[tech]}
								alt={`${tech} logo`}
								className={styles.techLogo}
							/>
						))}
					</div>
				</div>
				<div className={styles.leftInfo}>
					<div
						className={styles.desc}
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				</div>
				<img src={image} alt={title} className={styles.projectImage} />
			</div>
		</a>
	)
}

export default Project
