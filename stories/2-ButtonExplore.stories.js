import React from "react";
import { storiesOf } from "@storybook/react";

import ButtonCard from "../src/Componentes/ButtonCard";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
const stories = storiesOf("Storybook Knobs", module);
stories.addDecorator(withKnobs);

export default {
  component: ButtonCard,
  title: "Boton Explorar"
};

storiesOf("ButtonCard", module)
  .add(
    "BotonNoParámetros",
    () => (
      <ButtonCard nombreBoton={text("LabelBotonNoParametros", "")}></ButtonCard>
    ),
    {
      notes:
        "Este botón no contiene parámetros, tan solo debería llevar una flecha."
    }
  )
  .add(
    "Botón con parámetros",
    () => (
      <ButtonCard
        nombreBoton={text("LabelBotonParámetros", "Santorini")}
      ></ButtonCard>
    ),
    {
      notes:
        "Este botón si contiene parámetros y los usa para colocar el nombre, usando Knobs se los paso"
    }
  );
