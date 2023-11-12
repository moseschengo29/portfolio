import React, { useState, useEffect } from "react";
import Hero from "./Components/Home/Hero";
import Socials from "./Components/Socials";
import Navbar from "./Components/Navbar/Navbar";
import ProjectList from "./Components/Projects/ProjectList";
import SkillsList from "./Components/Skills/SkillsList";
import data from "./data";
import "./index.css";

function App() {
  const [lightMode, setLightMode] = useState(false);

  function handleLightMode() {
    setLightMode((prevLightMode) => !prevLightMode);
  }

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
  }, [lightMode]);

  return (
    <div className="app">
      <Navbar onChangeTheme={handleLightMode} isLight={lightMode} />
      <Socials />
      <main className="main">
        <Hero name={data.name} description={data.description} />
        <SkillsList skills={data.skills} experience={data.experience} />
        <ProjectList
          projects={data.projects}
          liveProjects={data.liveProjects}
        />
      </main>
    </div>
  );
}

export default App;
