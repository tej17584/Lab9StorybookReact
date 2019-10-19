import React from "react";
import { action } from "@storybook/addon-actions";
import Card2 from "../src/Componentes/Card2";

import { storiesOf } from "@storybook/react";

//Necesarios para knobs
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
const stories = storiesOf("Storybook Knobs", module);
stories.addDecorator(withKnobs);

export default {
  component: Card2,
  title: "Card 2 Terminada"
};

storiesOf("Card2", module).add(
  "Card Correcta numero dos",
  () => (
    <Card2></Card2>
  ),
  {
    notes: "Esta es una card simple pero llena."
  }
);
