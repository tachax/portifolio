import styles from './Hero.module.css'

function Hero() {
  return(
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <span className={styles.badge}>
          <span className={styles.dot}></span>
          open to opportunities · Fall 2026
        </span>

        <h1 className={styles.name}>
          Natacha
          <br />
          <span className={styles.nameGreen}>Angheben<span className={styles.dotAccent}>.</span></span>
        </h1>

        <p className={styles.subtitle}>
          Software Developer · BSCS Graduate · MS Student
        </p>

        <p className={styles.bio}>
          I like to build software to impact people :) From clinical research platform
          to enterprise tools at scale. USF Computer Science graduate, 
          now heading into a Master's program in Fall 2026. 
          Fluent in English and Portuguese,
          currently in Tampa, FL.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>View My Work</a>
          <a href="mailto:npangheben@outlook.com" className={styles.secondaryButton}>Say Hello</a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>2+</span>
            <span className={styles.statLabel}>Years Building</span>
          </div>
          {/* <div className={styles.stat}>
            <span className={styles.statValue}>4</span>
            <span className={styles.statLabel}>Products Shipped</span>
          </div> */}
          <div className={styles.stat}>
            <span className={styles.statValue}>1900+</span>
            <span className={styles.statLabel}>Users reached</span>
          </div>
        </div>  
      </div>

      <div className={styles.photoWrapper}>
        <div className={styles.photoRing} />
        <div className={styles.photoCircle}>
          <img src="/profile.jpg" alt="Natacha Angheben" className={styles.photo} />
        </div>
      </div>
    </section>
  )
}

export default Hero;