import * as styles from './Button.css.js';
import clsx from 'clsx';

export function Button({
  variant = 'solid', // solid | outline | filledTonal | transparent | filled
  size = 'pc', // pc | mobile
  icon,
  iconPosition = 'left', // left | right
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      className={clsx(
        styles.base,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
      )}
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