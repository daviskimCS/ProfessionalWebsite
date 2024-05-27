import React, { useState } from "react"
import styles from "../styles/Navbar.module.css"

// import ScrollIntoView from "react-scroll-into-view"

const Navbar = ({ scrollTo, refs }) => {
  const [selectedLink, setSelectedLink] = useState("home")

  const handleLinkClick = (link) => {
    setSelectedLink(link)
    scrollTo(refs[`${link}Ref`])
  }

  return (
    <nav className={styles.navBar}>
      <div
        className={`${styles.navItem} ${selectedLink === "home" ? styles.selected : ""}`}
      >
        <a
          href="#home"
          className={styles.navLink}
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick("home")
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
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick("project")
          }}
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
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick("skill")
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
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick("education")
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
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick("experience")
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
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick("about")
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
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick("contact")
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
