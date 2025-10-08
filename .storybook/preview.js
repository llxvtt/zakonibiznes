/** @type { import('@storybook/vue3-vite').Preview } */
import "../src/styles/main.css"
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;