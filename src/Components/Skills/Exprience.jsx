
function Exprience({ title, icon, year, desc }) {
  return (
    <div className="exprience-item">
      <i class={`fa-solid fa-${icon}`}></i>
      <div className="experience-body">
        <p className="experience-date">{year}</p>
        <h3 className="experience-title">{title}</h3>
        <p className="experience-desc">{desc}</p>
      </div>
    </div>
  );
}

export default Exprience;
