import React from "react";
import { action } from "@storybook/addon-actions";
import Card from "../src/Componentes/Card";
import Card2 from "../src/Componentes/Card2";
import Card3 from "../src/Componentes/Card3";

export default {
  component: Card,
  Card2,
  Card3,
  title: "Cards Terminadas"
};

export const CardCorrecta1 = () => <Card onClick={action("clicked")}></Card>;

export const CardCorrecta2 = () => <Card2 onClick={action("clicked")}></Card2>;

export const CardCorrecta3 = () => <Card3 onClick={action("clicked")}></Card3>;
