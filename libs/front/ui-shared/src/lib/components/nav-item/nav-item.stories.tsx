import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavItem } from './nav-item';

export default {
  component: NavItem,
  title: 'NavItem',
  argTypes: {
    handleClick: { action: 'handleClick executed!' },
  },
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
  <NavItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isButton: false,
  iconName: '',
  label: '',
  outlined: false,
  path: '',
};
