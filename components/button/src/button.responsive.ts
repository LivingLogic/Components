import { createComponent } from '@vue/composition-api';
import { ButtonWithoutTemplate } from './button';

export default createComponent({
  ...ButtonWithoutTemplate,
  template: `
    <button class="button" @click="emit('click')">
      <slot />
    </button>
  `
});