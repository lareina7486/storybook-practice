'use client';

import { Children, cloneElement, isValidElement } from 'react';
import Link from 'next/link';
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
    disabled && styles.disabled,
    className,
  ];

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );

  const child = Children.only(children);
  const isLinkChild = isValidElement(child) && child.type === Link;

  if (isLinkChild) {
    return (
      <span className={clsx(classes)} aria-disabled={disabled}>
        {cloneElement(child, {
          className: clsx(styles.linkInner, child.props.className),
        })}
      </span>
    );
  }

  return (
    <button
      type="button"
      className={clsx(classes)}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
