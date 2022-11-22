import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  return <div id="app" className="col centered">
    <Particles id="tsparticles" url="particles.json"/>
  </div>
}
