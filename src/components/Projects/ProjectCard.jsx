import styles from "./Projects.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          src={project.image}
          alt={project.title}
          loading='lazy'
        />
        <div className={styles.cardOverlay}>
          <div className={styles.overlayBtn}>
            <i className='fas fa-eye' /> View Project
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <span className={styles.cardTag}>Design</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
