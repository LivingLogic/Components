import { createComponent, ref } from '@vue/composition-api';

export const props = {
  color: {
    type: String,
    required: false,
    default: 'primary',
  }
};

export const ButtonWithoutTemplate = createComponent({
  props,
  setup(props, { emit }) {
    const styleObj = ref({
      '--internal-button-color': `var(--ion-color-${props.color}, black)`
    });
    return {
      props,
      emit,
      styleObj,
    };
  },
});
