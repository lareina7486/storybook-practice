'use client';

import { useEffect } from 'react';
import clsx from 'clsx';
import * as styles from './Popup.css.js';

export function Popup({
  open,
  onClose,
  message = '가입이 완료되었습니다!',
  confirmLabel = '확인',
  size = 'small',
}) {
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="popup-message"
    >
      <div
        className={clsx(styles.panel, styles.size[size])}
        onClick={(e) => e.stopPropagation()}
      >
        <p id="popup-message" className={styles.message}>
          {message}
        </p>
        <div className={styles.buttonWrap}>
          <button
            type="button"
            className={styles.confirmButton}
            onClick={onClose}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
