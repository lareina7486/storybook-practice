'use client';

import clsx from 'clsx';
import { Icon } from '@/shared/icons/Icon';
import * as styles from './Sort.css.js';

export function Sort({
  label = '승인 대기',
  active = false,
  onClick,
  ...rest
}) {
  return (
    <button
      type="button"
      className={styles.root}
      onClick={onClick}
      aria-pressed={active}
      {...rest}
    >
      <span className={styles.label[active ? 'active' : 'default']}>
        {label}
      </span>
      <span className={styles.iconWrap}>
        <Icon name="ic_toggle_down" width={24} height={24} aria-hidden />
      </span>
    </button>
  );
}
