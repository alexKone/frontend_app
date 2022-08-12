import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputForm } from './input-form';

export default {
  component: InputForm,
  title: 'InputForm',
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => (
  <InputForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: '',
  name: '',
  label: '',
};
