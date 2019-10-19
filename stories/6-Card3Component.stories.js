import React from "react";
import { action } from "@storybook/addon-actions";
import Card3 from "../src/Componentes/Card3";
import { storiesOf } from "@storybook/react";

//Necesarios para knobs
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
const stories = storiesOf("Storybook Knobs", module);
stories.addDecorator(withKnobs);
export default {
  component: Card3,
  title: "Card3 Terminada"
};

storiesOf("Card3", module).add(
  "Card Correcta numero tres",
  () => (
    <Card3></Card3>
  ),
  {
    notes: "Esta es una card simple pero llena."
  }
);

