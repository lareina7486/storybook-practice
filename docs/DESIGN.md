# Figma 디자인 시스템 기준

이 프로젝트의 공통 컴포넌트와 스타일은 아래 Figma 파일을 기준으로 구현합니다.

## Figma 소스

- **파일**: [스프린터 공유용 – 독스루](https://www.figma.com/design/8ZqOLwlXqxLjudjiXXQwpn/%EC%8A%A4%ED%94%84%EB%A6%B0%ED%84%B0-%EA%B3%B5%EC%9C%A0%EC%9A%A9--%EB%8F%85%EC%8A%A4%EB%A3%A8)
- **Button 컴포넌트**: `node-id=4711-52320`

Storybook에서 Button 스토리를 열면 **Design** 탭에서 해당 Figma 노드와 나란히 비교할 수 있습니다.

---

## 브레이크포인트 (lg / md / sm)

Figma 캔버스 기준을 width 구간으로 매핑한 공통 브레이크포인트입니다.  
`src/shared/components/breakpoints.css.js`에서 export 하며, 모든 반응형 스타일은 이 기준을 사용합니다.

| 구분 | Figma 캔버스 기준 | 미디어 쿼리 (width) | 용도 |
|------|-------------------|----------------------|------|
| **lg** | PC 1920×1405 | `min-width: 1200px` | 넓은 화면 |
| **md** | 태블릿 744×1474 | `744px ~ 1199px` | 중간 폭 |
| **sm** | 모바일 375×1320 | `max-width: 743px` | 작은 화면 |

- 사용 예: `import { breakpoint } from '../breakpoints.css.js'` 후 스타일 객체에 `'@media': { [breakpoint.sm]: { ... } }` 형태로 적용.

---

## 컬러 & 타이포 (토큰)

- **토큰 정의**: `src/shared/components/tokens.css.js`
- **Figma 컬러 시스템** → CSS 변수: `--gray-gray900`, `--gray-gray800`, … `--gray-gray50`, `--white`, `--brand-background`, `--brand-point`, `--brand-text`, `--red-error` 등.
- **타이포**: Pretendard 폰트, `--font-size-*`, `--font-weight-*`, `--line-height-tight` (Figma 26/18/16/14/12pt → px 매핑 주석 참고).

---

## Button (Figma 4711-52320)

- **스타일 정의**: `src/shared/components/Button/Button.css.js`
- **variant**: solid, solidInactive, outline, filledTonal, transparent, filled, outlineIcon
- **size**: pc (48px 높이, 16px 폰트), pcMedium (40px), mobile (32px, 14px) — solid/filledTonal은 size로 구분, outline/transparent는 미디어 쿼리로 sm에서 자동 축소.
- **반응형**: outline / transparent 는 `breakpoint.sm` 에서 높이·폰트·borderRadius 가 모바일 스펙으로 변경됩니다.

---

## 다른 컴포넌트

- **GNB**: Figma 4711-52571 (`src/shared/components/GNB/GNB.css.js`)
- **Chip / ChipCard**: 주석에 Figma px/round/gap 스펙 참고
- 추가 컴포넌트도 동일 Figma 파일 내 노드 ID를 주석/스토리에서 명시하고, 위 브레이크포인트·토큰 기준을 따릅니다.
