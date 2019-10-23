import { configure, addParameters, addDecorator } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withKnobs } from '@storybook/addon-knobs'

// set viewports
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'responsive',
  },
});
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.ts$/), module);
