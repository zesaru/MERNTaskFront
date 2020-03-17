import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  // Obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //obtener la funcion del contex de tarea
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;
  //Funcion para agregar el proyecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id); // Fijar proyecto actual
    obtenerTareas(id); // Filtrar las tareas cuando se de clic
  };
  return (
    <li key={proyecto.id}>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto._id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
