import { projects } from '../data/content';
import { CiStar } from "react-icons/ci";

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
            {project.githubUrl && project.liveUrl && (
              <CiStar className="project-link-star" />
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            )}
          </div>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.techStack.map((tech) => (
              <span key={tech} className="project-tag">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;