'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GNB, Button } from '@/shared/components';
import { Icon } from '@/shared/icons/Icon';
import * as styles from './index.css.js';

import { heroBackground, landingImg1, landingImg2, landingImg3 } from '@/shared/img';

const HERO_HEADLINE = `함께 번역하며 성장하는\n개발자의 새로운 영어 습관`;

const SECTIONS = [
  {
    icon: 'icon_document',
    title: '혼자서는 막막했던 번역,\n챌린지로 함께 완성하기',
    description:
      '중요한 건 꺾이지 않는 마음! 동료들과 함께\n기술 문서를 번역해 보세요.',
    image: landingImg1,
  },
  {
    icon: 'icon_heart_active',
    title: '내가 좋아하는 기술 번역,\n내가 필요한 기술 번역',
    description:
      '이미 진행 중인 번역 챌린지에 참여하거나, 새로운 번역 챌린지를 시작해 보세요.',
    image: landingImg2,
  },
  {
    icon: 'icon_heart_active',
    title: '피드백으로 함께 성장하기',
    description:
      '번역 작업물에 대해 피드백을 주고 받으며\n영어 실력은 물론, 개발 실력까지 키워 보세요',
    image: landingImg3,
  },
];

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <GNB
        status="guest"
        logoHref="/"
        logoText="Docthru"
        onLogin={() => {}}
      />

      <section className={styles.hero}>
        <Image
          src={heroBackground}
          alt=""
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroContent}>
          <span className={styles.heroLogo} aria-hidden>
            <Icon name="ic_logo" width={28} height={28} aria-hidden />
            Docthru
          </span>
          <h1 className={styles.heroHeadline}>
            {HERO_HEADLINE}
          </h1>
          <Button asChild variant="outline">
            <Link href="/challenges">번역 시작하기</Link>
          </Button>
        </div>
      </section>

      <main className={styles.main}>
        {SECTIONS.map((section, i) => (
          <div key={i}>
            <article className={styles.section}>
              <div className={styles.sectionContent}>
                <span className={styles.sectionIcon} aria-hidden>
                  <Icon
                    name={section.icon}
                    width={24}
                    height={24}
                    aria-hidden
                  />
                </span>
                <h2 className={styles.sectionTitle}>
                  {section.title.split('\n').map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < section.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <p className={styles.sectionDescription}>
                  {section.description.split('\n').map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < section.description.split('\n').length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </p>
              </div>
              <Image
                src={section.image}
                alt=""
                className={styles.sectionImage}
                width={section.image.width}
                height={section.image.height}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </article>
            {i < SECTIONS.length - 1 && <hr className={styles.divider} />}
          </div>
        ))}

        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>함께 번역하고 성장하세요!</h2>
          <Button asChild variant="solid">
            <Link href="/challenges">번역 시작하기</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
