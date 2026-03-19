/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.css";

const tags = [
  "Adobe Photoshop",
  "Illustrator",
  "Print Design",
  "Brand Identity",
  "Large Format",
  "Social Media",
  "Flex & Vinyl",
  "Roll-up Design",
];

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "100+", label: "Projects Done" },
  { number: "98%", label: "Satisfaction" },
  { number: "50+", label: "Happy Clients" },
  { number: "10+", label: "Design Tools" },
  { number: "∞", label: "Creativity" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id='about'
      className={styles.about}
      ref={ref}>
      <div className={styles.grid} />

      <div className='container'>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <div className={styles.headerBadge}>
            <i className='fas fa-user' />
            About Me
          </div>
          <h2>
            The Creative <span>Mind</span> Behind the Work
          </h2>
          <p>Passionate designer with a vision for impactful visuals and a commitment to excellence.</p>
        </motion.div>

        {/* Layout */}
        <div className={styles.layout}>
          {/* Left — image */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <div className={styles.imageFrame}>
              <img
                src='src/assets/images/profile.jpg'
                alt='Abdallah Whaid'
              />
              <div className={styles.expBadge}>
                <div className={styles.expIcon}>
                  <i className='fas fa-award' />
                </div>
                <div className={styles.expText}>
                  <strong>2+ Years Experience</strong>
                  <span>Advertising & Print Industry</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}>
            <div className={styles.textBlock}>
              <p>
                With over 2 years of experience in the advertising and printing industry, I specialize in creating
                impactful visual designs that bring marketing ideas to life.
              </p>
              <p>
                My expertise spans across printed marketing materials including banners, flex, vinyl, and roll-ups. I
                combine technical proficiency in Adobe Creative Suite with a keen eye for detail and a strong commitment
                to meeting deadlines.
              </p>
            </div>

            {/* Stats */}
            <div className={styles.statsRow}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className={styles.tagsBlock}>
              <h4>Tools & Skills</h4>
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href='#contact'
              className={styles.cta}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}>
              <i className='fas fa-paper-plane' />
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
