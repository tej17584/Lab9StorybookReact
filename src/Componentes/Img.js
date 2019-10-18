import React from "react";

import "./estilos.scss";

function Img(props) {
  return (
    <div>
      <img class="card__img" src={props.LinkImagen} alt="Desert"></img>
    </div>
  );
}

export default Img;
