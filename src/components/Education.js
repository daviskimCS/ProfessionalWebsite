import React from "react"
import styles from "../styles/Education.module.css"
import UCR from "../styles/static/ucrLogo.jpg"

const Education = React.forwardRef((props, ref) => {
	return (
		<div id="education" ref={ref} className={styles.cardContent}>
			<div className={styles.sectionTitle}>My Education</div>
			<a
				href="https://www1.cs.ucr.edu/"
				target="_blank"
				rel="noopener noreferrer"
				className={styles.educationContainer}
			>
				<img
					src={UCR}
					alt="university of california, riverside logo"
				></img>
				<div className={styles.cardText}>
					<div className={styles.cardTextTitleContainer}>
						<div className={styles.cardTextTitle}>
							Computer Science, B.S.
						</div>
						<div className={styles.cardTextTitle}>
							University of California, Riverside
						</div>
					</div>
					<div className={styles.cardTextUnder}>
						<ul>
							<li className={styles.cardTextTitleContainer}>
								<strong>Related Coursework:</strong>
							</li>
							<div className={styles.relatedCoursework}>
								<ul className={styles.nestedList}>
									<li>Embedded Systems</li>
									<li>Full Stack Web Development</li>
									<li>Data Structures and Algorithms</li>
									<li>Automata and Formal Languages</li>
									<li>Software Construction</li>
									<li>Object-Oriented Programming</li>
									<li>Linear Algebra</li>
									<li>Machine Organization</li>
									<li>Assembly Language</li>
									<li>Data Analysis Methods</li>
								</ul>
							</div>
						</ul>
					</div>
				</div>
			</a>
		</div>
	)
})

export default Education
