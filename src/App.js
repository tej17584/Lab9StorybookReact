import React from "react";
import logo from "./logo.svg";
import "./Componentes/estilos.scss";
import Card from "./Componentes/Card";
import Card2 from "./Componentes/Card2";
import Card3 from "./Componentes/Card3";

function App() {
  return (
    <div className="App">
      <div className="grid">
        <div className="grid__item">
          <Card />
        </div>
        <div className="grid__item">
          <Card2 />
        </div>
        <div className="grid__item">
          <Card3/>
        </div>
      </div>
    </div>
  );
}

export default App;
