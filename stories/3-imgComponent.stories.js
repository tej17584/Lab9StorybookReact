import React from "react";

import { storiesOf } from "@storybook/react";
import Img from "../src/Componentes/Img";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
const stories = storiesOf("Storybook Knobs", module);
stories.addDecorator(withKnobs);

export default {
  component: Img,
  title: "Imagen Card"
};

storiesOf("Img", module)
  .add(
    "ImgCard1",
    () => (
      <Img
        LinkImagen={text(
          "LinkImagen1",
          "https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3300&amp;q=80"
        )}
      ></Img>
    ),
    {
      notes: "Imagen de la primer card, debe cargar solo su imagen."
    }
  )
  .add(
    "ImgCard2",
    () => (
      <Img
        LinkImagen={text(
          "LinkImagen2",
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        )}
      ></Img>
    ),
    {
      notes: "Imagen de la segunda card, debe cargar solo su imagen."
    }
  )
  .add(
    "ImgCard3",
    () => (
      <Img
        LinkImagen={text(
          "LinkImagen3",
          "https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        )}
      ></Img>
    ),
    {
      notes: "Imagen de la tercer card, debe cargar solo su imagen."
    }
  );
