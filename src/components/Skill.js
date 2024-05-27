import React from "react"
import styles from "../styles/Skill.module.css"

import cpp from "../styles/static/cppLogo.png"
import python from "../styles/static/pythonLogo.png"
import js from "../styles/static/jsLogo.png"
import css from "../styles/static/cssLogo.png"
import html from "../styles/static/htmlLogo.png"
import swift from "../styles/static/swiftLogo.png"
import swiftUI from "../styles/static/swiftUILogo.png"
// import express from "../styles/static/expressLogo.png"
import node from "../styles/static/nodeLogo.png"
import react from "../styles/static/reactLogo.png"
import rust from "../styles/static/rustLogo.png"
import git from "../styles/static/gitLogo.png"
import firebase from "../styles/static/firebaseLogo.png"

// Rainbow vs proficiency sorting

const skills = [
  { imgSrc: js, alt: "JavaScript Logo", skillName: "JavaScript" },
  { imgSrc: react, alt: "React Logo", skillName: "React.js" },
  { imgSrc: node, alt: "Node.js Logo", skillName: "Node.js" },
  { imgSrc: cpp, alt: "C++ Logo", skillName: "C++" },
  { imgSrc: python, alt: "Python Logo", skillName: "Python" },
  { imgSrc: css, alt: "CSS Logo", skillName: "CSS" },
  { imgSrc: html, alt: "HTML Logo", skillName: "HTML" },
  { imgSrc: swift, alt: "Swift Logo", skillName: "Swift" },
  { imgSrc: swiftUI, alt: "SwiftUI Logo", skillName: "SwiftUI" },
  { imgSrc: firebase, alt: "Firebase Logo", skillName: "Firebase" },
  { imgSrc: rust, alt: "Rust Logo", skillName: "Rust" },
  { imgSrc: git, alt: "Git Logo", skillName: "Git" },
]

const Skill = React.forwardRef((props, ref) => {
  return (
    <div id="skill" ref={ref} className={styles.skillContent}>
      <div className={styles.title}>My Skills</div>
      <div className={styles.skillBadgeContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillBadge}>
            <img
              src={skill.imgSrc}
              alt={skill.alt}
              className={styles.skillLogo}
            />
            <div className={styles.skillText}>{skill.skillName}</div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default Skill
