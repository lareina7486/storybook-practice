'use client';

import { Icon } from '@/shared/icons/Icon';
import * as styles from './List.css.js';

/**
 * @param {'admin'|'member'} [profileType] - 전문가(admin)면 ic_profile_admin, 일반 멤버면 ic_profile_member. 없으면 role이 '전문가'일 때 admin
 */
export function ListRow({
  badgeLabel,
  name,
  role,
  profileType,
  likeCount: likeCountProp,
  onWorkClick,
  onLikeClick,
  showBadge = true,
}) {
  const isExpert = profileType === 'admin' || (profileType == null && role === '전문가');
  const profileIconName = isExpert ? 'ic_profile_admin' : 'ic_profile_member';

  return (
    <div className={styles.row}>
      {showBadge && badgeLabel != null && (
        <span className={styles.badge}>
          <Icon name="ic_crown" width={16} height={16} aria-hidden />
          {badgeLabel}
        </span>
      )}
      <div className={styles.profile}>
        <Icon name={profileIconName} width={24} height={24} aria-hidden />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </div>
      <div className={styles.right}>
        <button
          type="button"
          className={styles.likeCount}
          onClick={onLikeClick}
          aria-label="좋아요"
        >
          <Icon name="icon_heart_active" width={16} height={16} aria-hidden />
          {likeCountProp != null ? likeCountProp.toLocaleString() : '0'}
        </button>
        <button
          type="button"
          className={styles.workLink}
          onClick={onWorkClick}
        >
          작업물 보기
          <Icon name="icon_arrow_right" width={16} height={16} aria-hidden />
        </button>
      </div>
    </div>
  );
}

export function List({ children, withDivider }) {
  return (
    <div className={styles.list}>
      {children}
      {withDivider && <hr className={styles.divider} />}
    </div>
  );
}
