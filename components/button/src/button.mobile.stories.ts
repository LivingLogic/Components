import Vue from 'vue';
import Ionic from '@ionic/vue';
import CompositionApi, {createComponent, reactive} from '@vue/composition-api';
import { text } from '@storybook/addon-knobs';
import Button from './button.mobile';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);
Vue.use(CompositionApi);

export default {
  title: 'Button Mobile'
};

export const Basic = () => createComponent({
  props: {
    color: {
      default: text('Color', 'primary'),
    },
    text: {
      default: text('Text', 'Basic'),
    },
  },
  components: {
    Button
  },
  template: `<Button :color="color">{{text}}</Button>`
});

export const ClickCounter = () => createComponent({
  props: {
    color: {
      default: text('Color', 'primary'),
    },
  },
  components: { Button },
  template: `<Button @click="increment" :color="color">Clicked {{state.counter}}</Button>`,
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