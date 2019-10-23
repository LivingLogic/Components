import { createComponent } from '@vue/composition-api';

export const props = {
};

export const ButtonWithoutTemplate = createComponent({
  props,
  setup(props, { emit }) {
    return {
      props,
      emit
    };
  },
});
