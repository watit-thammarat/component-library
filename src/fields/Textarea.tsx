// File: src/fields/Textarea.tsx

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledTextarea } from './styles';

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  isResizable?: boolean;
}

export const Textarea = React.forwardRef<
  HTMLTextAreaElement, // New type for `ref` consumers
  TextareaProps
>((props, ref) => {
  const id = useContext(FieldContext);

  return <StyledTextarea ref={ref} id={id} {...props} />; // New styled element
});

Textarea.displayName = 'Field.Textarea'; // Updated display name

Textarea.defaultProps = {
  isResizable: true,
};

Textarea.propTypes = {
  isResizable: PropTypes.bool,
};
