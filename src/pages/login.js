'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Input } from '@/shared/components';
import { Icon } from '@/shared/icons/Icon';
import * as styles from './login.css.js';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 로그인 API 연동
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    // TODO: Google 로그인 연동
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/" className={styles.logoBlock}>
          <span className={styles.logo} aria-hidden>
            <Icon name="logo" width={28} height={28} aria-hidden />
            Docthru
          </span>
        </Link>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            className={styles.inputFullWidth}
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <Input
            className={styles.inputFullWidth}
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPasswordToggle
            autoComplete="current-password"
          />

          <div className={styles.buttonGroup}>
            <Button
              type="submit"
              variant="solid"
              className={styles.submitButton}
            >
              로그인
            </Button>
            <Button
              type="button"
              variant="secondary"
              className={styles.submitButton}
              onClick={handleGoogleLogin}
              icon={<Icon name="google" width={24} height={24} aria-hidden />}
              iconPosition="left"
            >
              Google로 시작하기
            </Button>
          </div>
        </form>

        <p className={styles.signupRow}>
          <span>회원이 아니신가요?</span>
          <Link href="/signup" className={styles.signupLink}>
            회원가입하기
          </Link>
        </p>
      </main>
    </div>
  );
}
