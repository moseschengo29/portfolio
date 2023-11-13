import React, { useState, useEffect } from "react";
import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Navbar/Navbar";
import ProjectList from "./Components/Projects/ProjectList";
import SkillsList from "./Components/Skills/SkillsList";
import data from "./data";
import "./index.css";
import Socials from "./Components/Socials/Socials";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

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
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
