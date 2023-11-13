
function ProjectCard({ liveProjects }) {
  return (
    <div className="projects-grid">
      {liveProjects.map((project) => (
        <div className="project-card">
          <div class="project-figure">
            <img src={project.image} alt="" />
            <div className="projects-icons">
              <a href="#fff">
                <i class="fa-solid fa-eye project-icon"></i>
              </a>
              <a href={project.githubLink}>
                <i class="fa-brands fa-github project-icon"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
