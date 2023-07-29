import Btn from './Btn.vue';

export default {
  title: 'Example/Btn',
  component: Btn,
  argTypes: {
    color: {
      control: { type: 'select', options: ['primary', 'neutral', 'text'] },
    },
    size: {
      control: { type: 'select', options: ['S', 'M', 'L'] },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { Btn },
  setup() {
    return { args };
  },
  template: '<Btn v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  color: 'primary',
  size: 'M',
  isDisabled: false,
  isLoading: false,
};
