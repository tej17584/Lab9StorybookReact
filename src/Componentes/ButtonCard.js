import React from "react";

import "./estilos.scss";


import { action } from '@storybook/addon-actions';
function Button(props) {
  return (
   
      <button className="card__btn" onClick={action('button-click')}>
        {props.nombreBoton} <span>&rarr;</span>
      </button>
    
  );
}

export default Button;
