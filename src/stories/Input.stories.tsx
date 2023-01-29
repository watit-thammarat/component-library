import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/Input',
  component: Field.Input,
  subcomponents: { Field, label: Field.Label },
} as ComponentMeta<typeof Field.Input>;

export const Default: ComponentStory<typeof Field.Input> = ({
  placeholder,
}) => {
  return (
    <Field>
      <Field.Label>Hello</Field.Label>
      <Field.Input placeholder={placeholder} />
    </Field>
  );
};

Default.args = {
  placeholder: 'Placeholder content',
};
