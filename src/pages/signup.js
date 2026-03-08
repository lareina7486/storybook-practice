'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GNB, Button, Input } from '@/shared/components';
import { Icon } from '@/shared/icons/Icon';
import * as styles from './signup.css.js';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 회원가입 API 연동
  };

  const handleGoogleSignup = (e) => {
    e.preventDefault();
    // TODO: Google 회원가입 연동
  };

  return (
    <div className={styles.page}>
      <GNB status="guest" />

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
            label="닉네임"
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            autoComplete="username"
          />
          <Input
            className={styles.inputFullWidth}
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPasswordToggle
            autoComplete="new-password"
          />
          <Input
            className={styles.inputFullWidth}
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해 주세요"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            showPasswordToggle
            autoComplete="new-password"
          />

          <div className={styles.buttonGroup}>
            <Button
              type="submit"
              variant="solid"
              className={styles.submitButton}
            >
              회원가입
            </Button>
            <Button
              type="button"
              variant="secondary"
              className={styles.submitButton}
              onClick={handleGoogleSignup}
              icon={<Icon name="google" width={24} height={24} aria-hidden />}
              iconPosition="left"
            >
              Google로 시작하기
            </Button>
          </div>
        </form>

        <p className={styles.loginRow}>
          <span>회원이신가요?</span>
          <Link href="/login" className={styles.loginLink}>
            로그인하기
          </Link>
        </p>
      </main>
    </div>
  );
}
