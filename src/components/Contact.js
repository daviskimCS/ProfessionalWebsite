import React from "react"
import styles from "../styles/Contact.module.css"
import linkedIn from "../styles/static/linkedinLogo.png"
import github from "../styles/static/githubLogo.png"
import mail from "../styles/static/mailLogo.png"

const Contact = React.forwardRef((props, ref) => (
  <div id="contact" ref={ref} className={styles.contactContent}>
    <div className={styles.title}>Let's talk :) </div>
    <div className={styles.buttonContainer}>
      <div className={styles.contactButton}>
        <a
          href="mailto:dkim479@ucr.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Email me</p>
          <img className={styles.mailLogo} src={mail} alt="resume logo"></img>
        </a>
      </div>
      <div className={styles.contactButton}>
        <a
          href="https://www.linkedin.com/in/daviskimCS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Connect with me</p>
          <img
            className={styles.linkedinLogo}
            src={linkedIn}
            alt="linked in logo"
          ></img>
        </a>
      </div>
      <div className={styles.contactButton}>
        <a
          href="https://github.com/daviskimCS/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Check my repos</p>
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

export default Contact
