import "./projectFilter.css";

function ProjectFilter({ filters, activeFilter, handleFilterClick }) {
  return (
    <div className="projects-filter">
      {filters.map((filter, i) => (
        <button
          key={i}
          className={`filter-btn ${
            activeFilter === filter ? "active-btn" : ""
          }`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilter;
