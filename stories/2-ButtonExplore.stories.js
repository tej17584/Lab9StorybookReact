import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ButtonCard from "../src/Componentes/ButtonCard";

export default {
  component: ButtonCard,
  title: "Boton Explorar"
};

export const BotonNoParámetros = () => (
  <ButtonCard onClick={action("button-click")} nombreBoton=""></ButtonCard>
);

export const BotonParámetros = () => (
  <ButtonCard onClick={action("button-click")} nombreBoton="Santorini"></ButtonCard>
);
