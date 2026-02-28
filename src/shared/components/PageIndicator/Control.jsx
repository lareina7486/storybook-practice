import { control } from './Control.css.js';
import clsx from 'clsx';

export const Control = ({ variant, current, children }) => {
  return children === current ? (
    <button className={control[variant]}>{children}</button>
  ) : (
    <button className={clsx(control[varint], inactive)}>{children}</button>
  );
};
