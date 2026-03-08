'use client';

import clsx from 'clsx';
import * as styles from './Button.css.js';

export function Button({
  variant = 'solid',
  status = true,
  icon,
  iconPosition = 'right',
  disabled = false,
  children,
  className,
  ...props
}) {
  const classes = [
    styles.base,
    variant === 'outline' && styles.variant.outline,
    variant === 'outlineIcon' && styles.variant.outlineIcon,
    variant === 'filled' && styles.variant.filled,
    variant === 'solid' && styles.variant[status ? 'solid' : 'solidInactive'],
    variant === 'filledTonal' && styles.variant.filledTonal,
    variant === 'transparent' && styles.variant.transparent,
    variant === 'secondary' && styles.variant.secondary,
    disabled && styles.disabled,
    className,
  ];

  return (
    <button
      type="button"
      className={clsx(classes)}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
}
