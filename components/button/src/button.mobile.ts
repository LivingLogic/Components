import { ButtonWithoutTemplate } from './button';
import { createComponent } from '@vue/composition-api';

export default createComponent({
  ...ButtonWithoutTemplate,
  template: `
    <ion-button :color="props.color" @click="emit('click')">
      <slot />
    </ion-button>
  `
});