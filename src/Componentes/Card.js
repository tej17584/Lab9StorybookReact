import React from "react";

import "./estilos.scss";
import Button from "./Button";
import Img from "./Img";

function Card() {
  return (
    <div>
      <Img LinkImagen="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3300&amp;q=80" />

      <div className="card__content">
        <h1 className="card__header">Utah sunsets</h1>
        <p className="card__text">
          Sunsets over the <strong>stunning</strong> Utah Canyonlands, is truly
          something much more than incredible.
        </p>
        <Button nombreBoton="Explore" />
      </div>
    </div>
  );
}

export default Card;
