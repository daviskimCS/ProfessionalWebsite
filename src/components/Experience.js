import React from "react"
import styles from "../styles/Experience.module.css"
import ThetaTau from "../styles/static/ThetaTauLetters.png"
import UCR from "../styles/static/ucrHSLogo.png"

const Experience = React.forwardRef((props, ref) => {
  return (
    <div id="experience" className={styles.expContent} ref={ref}>
      <div className={styles.title}>My Undergrad Experience</div>
      <a
        href="https://www.thetatau.org"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.expContainer}
        a
      >
        <img src={ThetaTau} alt="Theta Tau Logo"></img>
        <div className={styles.rightContent}>
          <div className={styles.degree}>
            Executive Board Scribe and Head Webmaster
          </div>
          <div className={styles.degreeText}>
            Theta Tau, Co-ed Professional Engineering Fraternity
          </div>
          <ul>
            <li>
              During my time at UCR, I served 2 years on the executive board
              where I ensured accurate recording of minutes for all meetings and
              maintained organization records. I oversaw office members
              responsible for website development, photography, and social media
              management. Additionally, I established the professional
              maintenance, engagement, and status of our online presence. This
              was bolstering our professionalism, service, and brotherhood
              pillars throughout my 3 years!
            </li>
          </ul>
        </div>
      </a>

      <a
        href="https://housing.ucr.edu/image/restech"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.expContainer}
        a
      >
        <img src={UCR} alt="Theta Tau Logo"></img>
        <div className={styles.rightContent}>
          <div className={styles.degree}>Residential Technical Assistant</div>
          <div className={styles.degreeText}>UCR Housing Services</div>
          <ul>
            <li>
              In UCR's housing service, I provide customer service to residents
              and external clientele, addressing technical needs, inquiries, and
              issues through email, phone call, and in-person meetings. I set
              up, operate, and troubleshot audio/visual equipment for events,
              assist with computer station setups, and resolve internet
              connectivity issues. I also collaborate within a team of 10
              members to efficiently manage, share, and optimize limited
              resources to achieve set deadlines.
            </li>
          </ul>
        </div>
      </a>
    </div>
  )
})

export default Experience
