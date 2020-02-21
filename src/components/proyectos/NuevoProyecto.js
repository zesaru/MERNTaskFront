import React, { useState } from "react";

const NuevoProyecto = () => {
  //State para el proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: ""
  });
  // Extraer nombre de proyecto
  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

  // Cuando el usuario envia un proyecto
  const onSubmitProyecto = e => {
    e.preventDefault();

    // Validar el proyecto

    // agregar al state

    // Reiniciar el form
  };

  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          onChange={onChangeProyecto}
        />

        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </>
  );
};

export default NuevoProyecto;
