'use client';

import clsx from 'clsx';
import { Icon } from '@/shared/icons/Icon';
import * as styles from './GNB.css.js';

/**
 * Figma 4711-52571 GNB (Global Navigation Bar)
 * @param {'large'|'medium'|'small'} size - large 1920/60px, medium 744/60px, small 375/56px
 * @param {'member'|'member-login'|'admin'} status - member: 로그인 버튼만 | member-login: 알림+프로필(멤버) | admin: 탭+프로필(관리자)
 * @param {string} [logoHref] - 로고 링크 (없으면 span)
 * @param {string} [logoText] - 로고 텍스트 (기본 'Docthru')
 * @param {Array<{ label: string, active?: boolean, href?: string, onClick?: function }>} [tabs] - admin일 때 탭 목록
 * @param {function} [onLogin] - 로그인 버튼 클릭 (member일 때)
 */
export function GNB({
  size = 'large',
  status = 'member',
  logoHref,
  logoText = 'Docthru',
  tabs = [],
  onLogin,
  onTabChange,
  className,
}) {
  const isSmall = size === 'small';
  const isAdmin = status === 'admin';
  const isMemberLogin = status === 'member-login';

  const LogoWrapper = logoHref ? 'a' : 'span';
  const logoProps = logoHref ? { href: logoHref } : {};

  return (
    <header
      className={clsx(styles.gnb[isSmall ? 'small' : 'default'], className)}
      role="banner"
    >
      <div className={styles.left}>
        <LogoWrapper
          className={styles.logo[isSmall ? 'small' : 'large']}
          {...logoProps}
        >
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
        {status === 'member' && (
          <button
            type="button"
            className={styles.loginButton[isSmall ? 'small' : 'default']}
            onClick={onLogin}
          >
            로그인
          </button>
        )}
        {isMemberLogin && (
          <>
            <span className={styles.profileWrap} aria-hidden>
              <Icon name="ic_bell" width={24} height={24} />
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
