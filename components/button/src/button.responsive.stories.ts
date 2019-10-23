import Vue from 'vue';
import CompositionApi, { createComponent, reactive } from '@vue/composition-api';
import LLButton from './button.responsive';
import css from './responsive.scss';
import './button.responsive.wc';

const style = document.createElement('style');
const head = document.getElementsByTagName('head')[0];
style.innerHTML = css + `
  :root {
    --ion-color-primary: yellow;
    --ion-color-favorite: orange;
    --internal-button-color: black;
  }
`
  ;
if (head) {
  head.appendChild(style);
}

Vue.use(CompositionApi);
Vue.config.ignoredElements = [
  ...Vue.config.ignoredElements,
  'll-button',
]

export default {
  title: 'Button Responsive',
};

export const Basic = () => ({
  components: { LLButton },
  template: `<LLButton>Hello World</LLButton>`
})

export const ClickCounter = () => createComponent({
  components: { LLButton },
  template: `<LLButton @test="increment" color="favorite">Clicked {{state.counter}}</LLButton>`,
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

export const NativeWC = () => ({
  template: `
    <ll-button id="wc" color="favorite">Native WC</ll-button>
  `,
  mounted() {

    const el = document.getElementById('wc');
    console.log(el);
    if (el)
      el.addEventListener('ll-click', () => {
        console.log("clicked")
      })
  }
})