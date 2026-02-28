import { control } from './Control.css.js';
import clsx from 'clsx';

export const Control = ({ variant, selected, children }) => {
  return (
    <button
      className={clsx(
        control[variant],
        !selected && control.inactive
      )}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
};