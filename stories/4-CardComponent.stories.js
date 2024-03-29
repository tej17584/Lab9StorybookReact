import React from "react";
import { action } from "@storybook/addon-actions";
import Card from "../src/Componentes/Card";
import { storiesOf } from "@storybook/react";

//Necesarios para knobs
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
const stories = storiesOf("Storybook Knobs", module);
stories.addDecorator(withKnobs);

export default {
  component: Card,
  title: "Card Terminada"
};


storiesOf("Card", module).add(
  "Card Correcta numero uno",
  () => (
    <Card></Card>
  ),
  {
    notes: "Esta es una card simple pero llena."
  }
);
