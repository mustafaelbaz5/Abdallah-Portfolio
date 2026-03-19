/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../data/projects";
import styles from "./ProjectsPage.module.css";

function ProjectsPage() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h1>All Projects</h1>
          <p>A complete showcase of my design work</p>
        </motion.div>
      </section>

      <section className={styles.projectsSection}>
        <div className='container'>
          <div className={styles.grid}>
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProjectsPage;
