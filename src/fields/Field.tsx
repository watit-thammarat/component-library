// File: src/fields/Field.tsx

import React from 'react';
import { useUniqueID } from '../utils/useUniqueID';
import { FieldContext } from './FieldContext';
import { Input } from './Input';
import { Label } from './Label';

interface FieldProps {
  children: React.ReactNode;
}

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
}

export const Field: React.FC<FieldProps> & FieldComposition = ({
  children,
}) => {
  const id = useUniqueID();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
