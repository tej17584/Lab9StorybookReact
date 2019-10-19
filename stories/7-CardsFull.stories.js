import React from "react";
import { action } from "@storybook/addon-actions";
import Card from "../src/Componentes/Card";
import Card2 from "../src/Componentes/Card2";
import Card3 from "../src/Componentes/Card3";
import App from "../src/App";
import { storiesOf } from "@storybook/react";

//Necesarios para knobs
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
const stories = storiesOf("Storybook Knobs", module);
stories.addDecorator(withKnobs);

export default {
  component: Card,
  Card2,
  Card3,
  title: "Cards Terminadas"
};

storiesOf("App", module).add(
  "Renderizado completo",
  () => (
    <App></App>
  ),
  {
    notes: "Esta es aplicación final"
  }
);

