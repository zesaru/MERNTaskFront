import React from "react";
import Sidebar from "../layout/SideBar";

const Proyecto = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <main>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyecto;
