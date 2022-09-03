import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonForm } from './button-form';

export default {
  component: ButtonForm,
  title: 'ButtonForm',
} as ComponentMeta<typeof ButtonForm>;

const Template: ComponentStory<typeof ButtonForm> = (args) => (
  <ButtonForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  label: '',
};
