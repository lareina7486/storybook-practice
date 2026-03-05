'use client';

import { ChipCard, Chip, Button } from '@/shared/components';
import { Icon } from '@/shared/icons/Icon';
import * as styles from './Card.css.js';

export function Card({
  size = 'large',
  status, // 'recruitEnd' | 'dateEnd'
  title,
  chipType, // 'next' | 'api' | 'career' | 'modernJs' | 'web'
  chipCategory, // 'docs' | 'blog'
  deadlineText,
  personText,
  ctaLabel = '도전 계속하기',
  onCtaClick,
  showCta = true,
}) {
  return (
    <article className={styles.card[size]}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          {status && (
            <ChipCard status={status} />
          )}
          {title && <h2 className={styles.title}>{title}</h2>}
          {(chipType || chipCategory) && (
            <div className={styles.chipsRow}>
              {chipType && <Chip type={chipType} />}
              {chipCategory && <Chip category={chipCategory} />}
            </div>
          )}
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.footer}>
        <div className={styles.metaRow}>
          <div className={styles.metaLeft}>
            {deadlineText && (
              <span className={styles.metaItem}>
                <Icon name="ic_deadline" width={24} height={24} aria-hidden />
                {deadlineText}
              </span>
            )}
            {personText && (
              <span className={styles.metaItem}>
                <Icon name="ic_person" width={24} height={24} aria-hidden />
                {personText}
              </span>
            )}
          </div>
          {showCta && (
            <Button
              variant="outline"
              size="pc"
              icon={<Icon name="icon_arrow_right" width={16} height={16} />}
              iconPosition="right"
              onClick={onCtaClick}
            >
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
