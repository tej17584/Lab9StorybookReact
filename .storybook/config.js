import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
import { addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

// Option defaults.
addParameters({
  options: {
    theme: themes.dark
  }
});
