/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

function Hero() {
  return (
    <section
      id='home'
      className={styles.hero}>
      <div className={styles.heroBg} />

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <motion.div
            className={styles.badge}
            {...fadeUp(0.1)}>
            <span />
            Available for work
          </motion.div>

          <motion.h1 {...fadeUp(0.2)}>
            Abdallah <span>Whaid</span>
          </motion.h1>

          <motion.h2 {...fadeUp(0.3)}>Graphic Designer & Print Specialist</motion.h2>

          <motion.p {...fadeUp(0.4)}>
            Transforming ideas into impactful visual designs that leave a lasting impression.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            {...fadeUp(0.5)}>
            <a
              href='#contact'
              className={styles.primaryBtn}>
              <span>
                <i className='fas fa-paper-plane' /> Get in Touch
              </span>
            </a>
            <a
              href='/Resume.pdf'
              className={styles.secondaryBtn}
              target='_blank'>
              <i className='fas fa-file-alt' /> View Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageRing} />
            <div className={styles.imageInner}>
              <img
                src='/images/profile.jpg'
                alt='Abdallah Whaid'
              />
            </div>

            <div className={`${styles.floatCard} ${styles.floatCard1}`}>
              <i className='fas fa-star' />
              98% Client Satisfaction
            </div>

            <div className={`${styles.floatCard} ${styles.floatCard2}`}>
              <i className='fas fa-layer-group' />
              100+ Projects Done
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
