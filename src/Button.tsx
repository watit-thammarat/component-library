import React from 'react';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...rest }, ref) => {
  return (
    <button ref={ref} type="button" {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
