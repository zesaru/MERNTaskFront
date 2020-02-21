import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyecto from "./components/proyectos/Proyecto";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
        <Route exact path="/proyectos" component={Proyecto} />
      </Switch>
    </Router>
  );
}

export default App;
