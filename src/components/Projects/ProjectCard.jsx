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
      </div>
      <div className={styles.cardContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
