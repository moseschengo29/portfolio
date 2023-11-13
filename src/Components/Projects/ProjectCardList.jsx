import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

function ProjectCardList({ liveProjects }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(liveProjects);

  function handleFilter(filter) {
    if (filter === "All") {
      setFilteredProjects(liveProjects);
    } else {
      const filtered = liveProjects.filter(
        (project) => project.category === filter
      );
      setFilteredProjects(filtered);
    }
    setActiveFilter(filter);
  }

  return (
    <div className="projects-cards">
      <h1 className="section-title">Major Projects</h1>
      <ProjectFilter
        filters={["All", "Web App", "React", "UI/UX", "Website", "Game"]}
        activeFilter={activeFilter}
        handleFilterClick={handleFilter}
      />
      <ProjectCard liveProjects={filteredProjects} />
    </div>
  );
}

export default ProjectCardList;
