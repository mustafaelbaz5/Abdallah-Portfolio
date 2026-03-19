/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const doubled = [...projects, ...projects];

  return (
    <section
      id='projects'
      className={styles.projects}
      ref={ref}>
      <div className='container'>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <h2 className='section-title'>Featured Projects</h2>
          <p>A selection of my recent design work</p>
        </motion.div>
      </div>

      <div className={styles.scrollContainer}>
        <div className={styles.track}>
          {doubled.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
            />
          ))}
        </div>
      </div>

      <div className={styles.viewAll}>
        <Link
          to='/projects'
          className={styles.viewAllBtn}>
          View All Projects <i className='fas fa-arrow-right' />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
