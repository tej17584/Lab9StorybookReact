import React from "react";

import "./estilos.scss";
import ButtonCard from "./ButtonCard";
import Img from "./Img";

function Card2() {
  return (
    <div>
      <div className="grid__item">
      <Img LinkImagen="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" />
      <div className="card__content">
        <h1 className="card__header">Misty mornings</h1>
        <p className="card__text">
          Capture the stunning <strong>essence</strong> of the early morning
          sunrise in the Californian wilderness.
        </p>
        <ButtonCard nombreBoton="Explore" />
      </div>
      </div>
    </div>
  );
}

export default Card2;
