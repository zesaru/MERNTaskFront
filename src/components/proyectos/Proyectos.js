import React from "react";
import Sidebar from "../layout/SideBar";
import Barra from "../layout/Barra";

const Proyecto = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Barra />
        <main>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyecto;
