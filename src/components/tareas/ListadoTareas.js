import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  // Extrar proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Si no hay proyectado seleccionado
  if (!proyecto) return <h2>Selecciona un Proyecto</h2>;

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataformas de pago", estado: false },
    { nombre: "Elegir Hosting", estado: true }
  ];

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map(tarea => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
