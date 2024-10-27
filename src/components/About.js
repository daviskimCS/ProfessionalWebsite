import React from "react"
import styles from "../styles/About.module.css"

const About = React.forwardRef((props, ref) => {
	return (
		<div id="about" ref={ref} className={styles.aboutContent}>
			<div className={styles.title}>About Me</div>
			<div className={styles.aboutInfoContainer}>
				<ul>
					<li>
						<strong>Career Goals:</strong>
						<ul className={styles.nestedList}>
							<li>
								Since starting my Computer Science degree, I
								have developed a strong passion and fascination
								for embedded systems and full-stack development.
							</li>
						</ul>
					</li>
					<li>
						<strong>Personal Interests:</strong>
						<ul className={styles.nestedList}>
							<li>
								I enjoy perfumery, fashion, film photography,
								bouldering, and competitive fighting games.
								Recently, I started creating my own perfumes.
							</li>
						</ul>
					</li>
					<li>
						<strong>Motivation/Impact:</strong>
						<ul className={styles.nestedList}>
							<li>
								My driving force is to make a meaningful,
								positive impact on anyone I interact with. I
								take great pride in fostering collaborative and
								productive environments.
							</li>
						</ul>
					</li>
					<li>
						<strong>Future Opportunities:</strong>
						<ul className={styles.nestedList}>
							<li>
								While I am currently focused on my personal
								projects, I am always open to new opportunities
								to expand my skills and knowledge. If you
								believe I'd be a good fit for your team, feel
								free to reach out to me at:
								<a
									href="mailto:dkim479@ucr.edu"
									target="_blank"
									rel="noopener noreferrer"
								>
									dkim479[at]ucr.edu
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	)
})

export default About
