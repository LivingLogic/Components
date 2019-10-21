import { configure } from '@storybook/vue';

// set viewports
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'responsive',
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
