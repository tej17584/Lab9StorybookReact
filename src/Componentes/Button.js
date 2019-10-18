import React from "react";

import "./estilos.scss";

function Button(props) {
  return (
    <div>
      <button className="card__btn">
        {props.nombreBoton} <span>&rarr;</span>
      </button>
    </div>
  );
}

export default Button;
