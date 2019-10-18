import React from "react";
import { action } from "@storybook/addon-actions";
import Img from "../src/Componentes/Img";


export default {
    component: Img,
    title: "Imagen Card" 
  };

  export const ImagenCorrecta1 = () => (
    <Img onMouseOver={action('hovered')} LinkImagen="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3300&amp;q=80" />
  );
  
  export const ImagenCorrecta2 = () => (
    <Img LinkImagen="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" />
  );
  
  export const ImagenCorrecta3 = () => (
    <Img LinkImagen="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" />
  );