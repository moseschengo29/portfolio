import Skill from "./Skill";
import Exprience from "./Exprience";
import "./skillList.css";

function SkillsList({ skills, experience }) {
  return (
    <div className="skills" id="skills">
      <div className="section-header mg-bottom">
        <h1 className="section-title">Skills & Experience</h1>
        <a href="https://github.com/moseschengo29" className="skills-link">
          view full profile &rarr;
        </a>
      </div>
      <div className="skills-main">
        <div className="skills-section">
          {skills.map((skill) => (
            <Skill key={skill.id} name={skill.name} icon={skill.icon} />
          ))}
        </div>
        <div className="exp">
          {experience.map((exp) => (
            <Exprience
              key={exp.id}
              icon={exp.icon}
              title={exp.title}
              year={exp.year}
              desc={exp.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsList;
