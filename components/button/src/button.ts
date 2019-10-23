import { createComponent, ref, computed } from '@vue/composition-api';

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
    const styleObj = computed(() => ({
      '--internal-button-color': `var(--ion-color-${props.color}, black)`
    }));
    console.log("hello world");
    return {
      props,
      emit,
      styleObj,
    };
  },
});
