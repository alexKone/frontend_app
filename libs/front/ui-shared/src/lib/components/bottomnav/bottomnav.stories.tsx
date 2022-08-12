import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Bottomnav } from './bottomnav';

export default {
  component: Bottomnav,
  title: 'Bottomnav',
} as ComponentMeta<typeof Bottomnav>;

const Template: ComponentStory<typeof Bottomnav> = (args) => (
  <Bottomnav {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
