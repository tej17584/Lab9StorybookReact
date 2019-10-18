import React from "react";

import "./estilos.scss";
import ButtonCard from "./ButtonCard";
import Img from "./Img";

function Card3() {
  return (
    <div>
      <div className="grid__item">
        <Img LinkImagen="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" />
        <div className="card__content">
          <h1 className="card__header">A starry night</h1>
          <p className="card__text">
            Look up at the night sky, and find yourself{" "}
            <strong>immersed</strong> in the amazing mountain range of Aspen.{" "}
          </p>
          <ButtonCard nombreBoton="Explore" />
        </div>
      </div>
    </div>
  );
}

export default Card3;
