import { createComponent } from '@vue/composition-api';
import { ButtonWithoutTemplate } from './button';

export default createComponent({
  ...ButtonWithoutTemplate,
  template: `
    <button :style="styleObj" class="ll-button" @click="emit('test')">
      <slot />
    </button>
  `
});