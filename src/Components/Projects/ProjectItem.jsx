
function ProjectItem({
  title,
  description,
  technologies,
  github,
  demo,
  demoLink,
}) {
  return (
    <div className="project">
      <div className="icons">
        <div className="folder">
          <i className="fa-regular fa-folder"></i>
        </div>
        <div className="links">
          <a href={github}>
            <i className="fa-brands fa-github"></i>
          </a>
          {demo && (
            <a href={demoLink}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}
        </div>
      </div>

      <div className="project-details">
        <h4 className="project-title">{title}</h4>
        <p className="project-desc">{description}</p>

        <footer className="tech">
          {technologies.map((tech) => (
            <p key={tech} className="tech">
              {tech}
            </p>
          ))}
        </footer>
      </div>
    </div>
  );
}

export default ProjectItem;
