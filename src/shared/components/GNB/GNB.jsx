'use client';

import clsx from 'clsx';
import { Icon } from '@/shared/icons/Icon';
import * as styles from './GNB.css.js';

/**
 * Figma 4711-52571 GNB (Global Navigation Bar)
 * 반응형: ~767px small, 768px~ large (미디어 쿼리)
 * @param {'guest'|'member'|'admin'} status - guest: 로그인 버튼 | member: 알림+멤버 프로필 | admin: 탭+관리자 프로필
 * @param {string} [logoHref] - 로고 링크 (없으면 span)
 * @param {string} [logoText] - 로고 텍스트 (기본 'Docthru')
 * @param {Array<{ label: string, active?: boolean, href?: string, onClick?: function }>} [tabs] - admin일 때 탭 목록
 * @param {function} [onLogin] - 로그인 버튼 클릭 (guest일 때)
 */
export function GNB({
  status = 'guest',
  logoHref,
  logoText = 'Docthru',
  tabs = [],
  onLogin,
  onTabChange,
  className,
}) {
  const isAdmin = status === 'admin';
  const isMember = status === 'member';

  const LogoWrapper = logoHref ? 'a' : 'span';
  const logoProps = logoHref ? { href: logoHref } : {};

  return (
    <header className={clsx(styles.gnb, className)} role="banner">
      <div className={styles.left}>
        <LogoWrapper className={styles.logo} {...logoProps}>
          <span className={styles.logoIcon}>
            <Icon name="ic_logo" width={28} height={28} aria-hidden />
          </span>
          {logoText}
        </LogoWrapper>
      </div>

      {isAdmin && tabs.length > 0 && (
        <nav className={styles.center} aria-label="주 메뉴">
          <div className={styles.tabs}>
            {tabs.map((tab, i) => {
              const TabEl = tab.href ? 'a' : 'button';
              const tabProps = tab.href
                ? { href: tab.href }
                : { type: 'button', onClick: () => onTabChange?.(i, tab) };
              return (
                <TabEl
                  key={i}
                  className={styles.tab[tab.active ? 'active' : 'default']}
                  {...tabProps}
                >
                  {tab.label}
                </TabEl>
              );
            })}
          </div>
        </nav>
      )}

      <div className={styles.right}>
        {status === 'guest' && (
          <button
            type="button"
            className={styles.loginButton}
            onClick={onLogin}
          >
            로그인
          </button>
        )}
        {isMember && (
          <>
            <span className={styles.profileWrap} aria-hidden>
              <Icon name="ic_bell_notification" width={24} height={24} />
            </span>
            <span className={styles.profileWrap} aria-hidden>
              <Icon name="ic_profile_member" width={32} height={32} />
            </span>
          </>
        )}
        {isAdmin && (
          <span className={styles.profileWrap} aria-hidden>
            <Icon name="ic_profile_admin" width={32} height={32} />
          </span>
        )}
      </div>
    </header>
  );
}
