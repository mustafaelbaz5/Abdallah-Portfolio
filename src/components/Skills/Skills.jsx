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
      <div className='container'>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <h2 className='section-title'>Skills & Expertise</h2>
          <p>Tools and technologies I work with</p>
        </motion.div>

        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className={styles.iconWrapper}>
                <i className={skill.icon} />
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
