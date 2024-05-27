import React from "react"
import styles from "../styles/Home.module.css"
import headshot from "../styles/static/ProfessionalHeadshot.jpeg"
import resumeLogo from "../styles/static/resumeLogo.png"
import resume from "../styles/static/DavisKimResume.pdf"
import linkedin from "../styles/static/linkedinLogo.png"
import github from "../styles/static/githubLogo.png"

const Home = React.forwardRef((props, ref) => (
  <div ref={ref} className={styles.homeContent}>
    <div className={styles.profilePictureContainer}>
      <img
        src={headshot}
        alt="headshot of davis kim"
        className={styles.profilePicture}
      ></img>
    </div>
    <div className={styles.profileDescriptionContainer}>
      <div className={styles.profileName}>
        Davis Kim
      </div>
      <div className={styles.profileDescription}>
        CS | Software Engineer | Web Developer
        {/* AUTO TEXT HERE */}
      </div>
    </div>
    <div className={styles.buttonContainer}>
      <div className={styles.topButton}>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <p>Resume</p>
          <img
            className={styles.resumeLogo}
            src={resumeLogo}
            alt="resume logo"
          ></img>
        </a>
      </div>
      <div className={styles.topButton}>
        <a
          href="https://www.linkedin.com/in/daviskimCS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>LinkedIn</p>
          <img
            className={styles.linkedinLogo}
            src={linkedin}
            alt="linked in logo"
          ></img>
        </a>
      </div>
      <div className={styles.topButton}>
        <a
          href="https://github.com/daviskimCS/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>GitHub</p>
          <img
            className={styles.githubLogo}
            src={github}
            alt="github logo"
          ></img>
        </a>
      </div>
    </div>
  </div>
))

export default Home
