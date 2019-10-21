import { configure, addParameters } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// set viewports
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'responsive',
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.ts$/), module);
