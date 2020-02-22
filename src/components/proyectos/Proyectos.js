import React from "react";
import Sidebar from "../layout/SideBar";
import Barra from "../layout/Barra";
import FormTarea from "../tareas/FormTarea";

const Proyecto = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTarea />
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyecto;
