import React from "react"
import styles from "../styles/Project.module.css"

const Project = ({ title, image, technologies, description, button }) => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.leftInfo}>
        <div className={styles.title}>{title}</div>
        <div className={styles.technologies}>Made with: {technologies}</div>
        <div className={styles.desc}>{description}</div>
        {/* <button className={styles.button}>{button}</button> */}
      </div>
      <img src={image} alt={title} className={styles.projectImage} />
    </div>
  )
}

export default Project
