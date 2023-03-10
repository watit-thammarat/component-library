import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>my button component</Button>
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
};
