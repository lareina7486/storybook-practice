import { control } from './Control.css.js';
import clsx from 'clsx';

export const Control = ({ variant, selected, children, onClick }) => {
  return (
    <button
      type="button"
      className={clsx(control.page, selected && control.selected)}
      aria-pressed={selected}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
