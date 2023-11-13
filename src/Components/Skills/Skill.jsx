import "./skill.css";

function Skill({ name, icon }) {
  return (
    <div className="one-skill">
      <i className={`fa-brands fa-${icon} skill-icon`}></i>
      <p>{name}</p>
    </div>
  );
}

export default Skill;
