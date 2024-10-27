import React from "react"

import styles from "../styles/Experience.module.css"

import ThetaTau from "../styles/static/ThetaTauLetters.png"
import UCR from "../styles/static/ucrHSLogo.png"

const Experience = React.forwardRef((props, ref) => {
	return (
		<div id="experience" className={styles.expContent} ref={ref}>
			<div className={styles.sectionTitle}>My Undergrad Experience</div>
			<a
				href="https://www.thetatau.org"
				target="_blank"
				rel="noopener noreferrer"
				className={styles.expContainer}
			>
				<img src={ThetaTau} alt="Theta Tau Logo"></img>
				<div className={styles.cardText}>
					<div className={styles.cardTextTitleContainer}>
						<div className={styles.cardTextTitle}>
							Executive Board Scribe and Head Webmaster
						</div>
						<div className={styles.cardTextTitle}>
							Theta Tau, Co-ed Professional Engineering Fraternity
						</div>
					</div>
					<div className={styles.cardTextUnder}>
						<ul>
							<li>
								<strong>Board Tenure:</strong>
								<ul className={styles.nestedList}>
									<li>
										2 years serving on the executive board
									</li>
								</ul>
							</li>
							<li>
								<strong>Impact:</strong>
								<ul className={styles.nestedList}>
									<li>
										Managed a team of four developers in the
										full-cycle development of a full-stack
										web application, utilizing
										<strong> ReactJS </strong> for the
										frontend, <strong> Firebase </strong>,
										and <strong> NodeJS </strong> for the
										backend.
									</li>
									<li>
										Strengthened the professionalism,
										service, and brotherhood within the
										Theta Tau, Sigma Delta during my three
										years of active involvement.
									</li>
								</ul>
							</li>
							<li>
								<strong>Responsibilities:</strong>
								<ul className={styles.nestedList}>
									<li>
										Recorded minutes for all meetings and
										maintained organizational records.
									</li>
									<li>
										Supervised office members responsible
										for website development, photography,
										and social media management.
									</li>
									<li>
										Established and maintained the online
										presence of the organization.
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</a>

			<a
				href="https://housing.ucr.edu/image/restech"
				target="_blank"
				rel="noopener noreferrer"
				className={styles.expContainer}
				a
			>
				<img src={UCR} alt="UCR Housing Services Logo"></img>
				<div className={styles.cardText}>
					<div className={styles.cardTextTitle}>
						Residential Technical Assistant
					</div>
					<div className={styles.cardTextTitle}>
						UCR Housing Services
					</div>
					<ul>
						<li>
							<strong>Customer Service:</strong>
							<ul className={styles.nestedList}>
								<li>
									Provide support to residents and external
									clientele through email, phone, and
									in-person meetings to address technical
									needs, inquiries, and issues.
								</li>
							</ul>
						</li>
						<li>
							<strong>Technical Operations:</strong>
							<ul className={styles.nestedList}>
								<li>
									Set up, operate, and troubleshoot
									audio/visual equipment for events.
								</li>
								<li>
									Assist with computer station setups and
									resolve internet connectivity issues.
								</li>
							</ul>
						</li>
						<li>
							<strong>Team Collaboration:</strong>
							<ul className={styles.nestedList}>
								<li>
									Work within a team of 10 members to manage,
									share, and optimize limited resources to
									meet deadlines efficiently.
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</a>
		</div>
	)
})

export default Experience
