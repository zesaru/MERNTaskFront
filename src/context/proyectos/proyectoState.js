import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = props => {
  const initialState = {
    nuevoProyecto: false
  };

  // dispach para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // serie de funciones crud

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
