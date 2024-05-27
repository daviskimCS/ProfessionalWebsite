import React from "react"
import styles from "../styles/Education.module.css"
import UCR from "../styles/static/ucrLogo.jpg"

const Education = React.forwardRef((props, ref) => {
  return (
    <div id="education" ref={ref} className={styles.educationContent}>
      <div className={styles.title}>My Education</div>
      <a
        href="https://www1.cs.ucr.edu/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.educationContainer}
      >
        <img src={UCR} alt="university of california, riverside logo"></img>
        <div className={styles.rightContent}>
          <div className={styles.degree}>Bachelor of Science</div>
          <div className={styles.degreeText}>
            University of California, Riverside
          </div>
          <ul>
            <li>Major in Computer Science</li>
            <li>Expected graduation in 2025</li>
            <li>GPA: 3.5 </li>
          </ul>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.degree}> Related Coursework: </div>
          <ul>
            <li>Data Structures and Algorithms</li>
            <li>Web Developement</li>
            <li>Automata and Formal Languages</li>
            <li>Object-Oriented Programming</li>
            <li>Machine Organization</li>
            <li>Data Analysis Methods</li>
          </ul>
        </div>
      </a>
    </div>
  )
})

export default Education
