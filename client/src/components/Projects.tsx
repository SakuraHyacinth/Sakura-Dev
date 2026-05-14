import { projects } from '../data/content';

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.techStack.map((tech) => (
              <span key={tech} className="project-tag">{tech}</span>
            ))}
          </div>
          {project.githubUrl && (
            <a href={project.githubUrl} className="project-link">
              View on GitHub →
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;