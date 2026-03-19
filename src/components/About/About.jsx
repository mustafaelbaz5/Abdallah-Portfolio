/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.css";

const tags = ["Adobe Photoshop", "Illustrator", "Print Design", "Brand Identity", "Large Format", "Social Media"];

const stats = [
  { icon: "fas fa-trophy", number: "98%", label: "Client Satisfaction" },
  { icon: "fas fa-layer-group", number: "100+", label: "Projects Completed" },
  { icon: "fas fa-clock", number: "2+", label: "Years Experience" },
  { icon: "fas fa-star", number: "50+", label: "Happy Clients" },
];

function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id='about'
      className={styles.about}
      ref={ref}>
      <div className='container'>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <h2 className='section-title'>About Me</h2>
          <p>Passionate designer with a vision for impactful visuals</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <p>
              With over 2 years of experience in the advertising and printing industry, I specialize in creating
              impactful visual designs that bring marketing ideas to life.
            </p>
            <p>
              My expertise spans across printed marketing materials including banners, flex, vinyl, and roll-ups. I
              combine technical proficiency in Adobe Creative Suite with a keen eye for detail and a strong commitment
              to meeting deadlines.
            </p>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.statsGrid}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}>
                <i className={stat.icon} />
                <span className={styles.number}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
