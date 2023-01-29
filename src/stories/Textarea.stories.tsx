// File: src/stories/Textarea.stories.tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/TextArea',
  component: Field.Textarea,
  subcomponents: { Field, label: Field.Label },
} as ComponentMeta<typeof Field.Textarea>;

const Template: ComponentStory<typeof Field.Textarea> = (args) => (
  <Field>
    <Field.Label>TextArea</Field.Label>
    <Field.Textarea placeholder="Custom TextArea" {...args} />
  </Field>
);

export const Default = Template.bind({});

Default.args = {
  isResizable: true,
};
