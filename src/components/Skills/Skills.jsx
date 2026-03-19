/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../../data/skills";
import styles from "./Skills.module.css";

function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id='skills'
      className={styles.skills}
      ref={ref}>
      <div className={styles.bgGrid} />

      <div className='container'>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <div className={styles.headerBadge}>
            <i className='fas fa-bolt' />
            What I Do
          </div>
          <h2>
            Skills & <span>Expertise</span>
          </h2>
          <p>Tools and techniques I use to bring creative visions to life</p>
        </motion.div>

        {/* Cards */}
        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}>
              <span className={styles.cardNumber}>0{i + 1}</span>
              <div className={styles.iconWrapper}>
                <i className={skill.icon} />
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <a
            href='#contact'
            className={styles.ctaBtn}>
            <i className='fas fa-handshake' />
            Let's Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
