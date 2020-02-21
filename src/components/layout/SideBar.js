import React from "react";
import NuevoProyecto from "../proyectos/NuevoProyecto";

const SideBar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
        <NuevoProyecto />
      </h1>
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
      </div>
    </aside>
  );
};

export default SideBar;
