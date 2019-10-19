import React from "react";
import { action } from "@storybook/addon-actions";
import "./estilos.scss";

function Img(props) {
  return (
    <div>
      <img onMouseOver={action('hovered')} class="card__img" src={props.LinkImagen} alt="Desert"></img>
    </div>
  );
}

export default Img;
