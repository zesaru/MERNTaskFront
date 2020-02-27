import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTareas = () => {
  // Extrar proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;

  // Si no hay proyectado seleccionado
  if (!proyecto) return <h2>Selecciona un Proyecto</h2>;

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [];

  // Elimina un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };
  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasproyecto.map(tarea => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
