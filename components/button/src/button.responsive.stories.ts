import Vue from 'vue';
import CompositionApi, { createComponent, reactive } from '@vue/composition-api';
import LLButton from './button.responsive';
import 'foundation-sites/dist/css/foundation.css';

Vue.use(CompositionApi);
Vue.config.ignoredElements = [
  ...Vue.config.ignoredElements,
  'll-button',
]

export default {
  title: 'Button Responsive',
};

export const Basic = () => ({
  components: {LLButton},
  template: `<LLButton>Hello World</LLButton>`
})

export const ClickCounter = () => createComponent({
  components: {LLButton},
  template: `<LLButton @click="increment">Clicked {{state.counter}}</LLButton>`,
  setup() {
    const state = reactive({
      counter: 0,
    });
    function increment() {
      state.counter += 1;
    };
    return {
      state,
      increment,
    }
  },
})

export const ClickCounterNative = () => createComponent({
  template: `
    <ll-button>Hello</ll-button>
  `
})