

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
"stories": [
  "../tokens/components/**/*.stories.@(js|jsx|ts|tsx)"
],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;