import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, []);

  return <div id="app" className="col centerChildren">
    <Particles id="tsparticles" url="particles.json" init={particlesInit}/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="projects" element={<Projects/>}/>
    </Routes>
  </div>
}
