import ProjectCardList from "./ProjectCardList";
import ProjectItem from "./ProjectItem";
import "./projectList.css";

function ProjectList({ projects, liveProjects }) {
  return (
    <div className="projects-section">
      <ProjectCardList liveProjects={liveProjects}/>
      <div className="section-header" id="projects">
        <h1 className="projects-title">Other Notable Projects</h1>
        <a
          href="https://github.com/moseschengo29?tab=repositories"
          className="projects-link"
        >
          view github profile &rarr;
        </a>
      </div>

      <div className="projects" id="projects">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
