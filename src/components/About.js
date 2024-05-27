import React from "react"
import styles from "../styles/About.module.css"

const About = React.forwardRef((props, ref) => {
  return (
    <div id="about" ref={ref} className={styles.aboutContent}>
      <div className={styles.title}>About me</div>
      <div className={styles.aboutInfoContainer}>
        <div className={styles.topic}>
          <b> Background: </b> I was born and raised in Southern California and
          am currently residing in Riverside, CA.
        </div>
        <div className={styles.topic}>
          <b> Career Goals: </b> Ever since starting my degree in Computer
          Science, I have enjoyed full stack development and found cybersecurity
          and bioinformatics very interesting. I would love any oppurtunity to
          deepen my understanding of anything CS related!
        </div>
        {/* <div className={styles.topic}>
          <b> Personal Interests: </b> Film photography (fav. cam: Canon AE-1),
          fashion (fav. brand: disc) , perfumery (fav. fragrance: m04), rock
          climbing (highest grade: v6), competitive fighting games (fav. game:
          ssbu).
        </div> */}
        <div className={styles.topic}>
          <b> Personal Interests: </b> Perfumery, Fashion, Film photography,
          Bouldering, and Competitive fighting games.
        </div>
        <div className={styles.topic}>
          <b> Motivation/Passion: </b> To have a significant positive impact on
          anyone that I have any connection with. I find great pleasure
          fostering productive environments with anyone.
        </div>
        <div className={styles.topic}>
          <b>Future oppurtunities: </b> Currently I am working on my own
          personal projects; however, I am open and looking for any oppurtunity
          to expand my knowledge. If you think I'm a good fit, please contact me
          via:
          <a
            href="mailto:dkim479@ucr.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            dkim479[at]ucr.edu
          </a>
        </div>
      </div>
    </div>
  )
})

export default About
// Name, vBrief rundown, projects, exp, skills, education, more about me
