///<reference path="../../../shims-scss.d.ts" />
import Vue from 'vue';
import VueButton from './button.responsive';
import css from './responsive.scss';
class LLButton extends HTMLElement {
  connectedCallback() {
    const element = this;
    const mountPoint = document.createElement('span');
    const style = document.createElement('style');
    const shadowRoot = this.attachShadow({mode: 'open'});
    style.innerHTML = css;
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(mountPoint);
    const slot = this.innerHTML;
    const color = this.getAttribute('color') || 'primary';
    new Vue({
      template: `<VueButton @test="triggerLLClick" color=${color}>${slot}</VueButton>`,
      components: {VueButton},
      methods: {
        triggerLLClick() {
          const event = new CustomEvent('ll-click');
          element.dispatchEvent(event);
        }
      }
    }).$mount(mountPoint);
  }
}

customElements.define('ll-button', LLButton);