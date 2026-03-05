// 아이콘 파일 경로 매핑
// 규칙: Figma 아이콘 이름과 동일한 키를 사용하고,
// 실제 SVG 파일은 `public/icons/{name}.svg` 로 export 해 두면 됩니다.
// 예: `ic_arrow_down` → `public/icons/ic_arrow_down.svg`

export const ICON_BASE_PATH = '/icons';

export const iconPaths = {
  // 기본 화살표/리스트/검색 등
  ic_arrow_down: `${ICON_BASE_PATH}/ic_arrow_down.svg`,
  ic_arrow_up: `${ICON_BASE_PATH}/ic_arrow_up.svg`,
  ic_list: `${ICON_BASE_PATH}/ic_list.svg`,
  ic_out: `${ICON_BASE_PATH}/ic_out.svg`,
  Meatballs_menu: `${ICON_BASE_PATH}/Meatballs_menu.svg`,
  ic_search: `${ICON_BASE_PATH}/ic_search.svg`,

  // 데드라인/왕관
  ic_deadline: `${ICON_BASE_PATH}/ic_deadline.svg`,
  ic_crown: `${ICON_BASE_PATH}/ic_crown.svg`,

  // 사람/프로필
  ic_person: `${ICON_BASE_PATH}/ic_person.svg`,
  ic_profile: `${ICON_BASE_PATH}/ic_profile.svg`,
  ic_profile_admin: `${ICON_BASE_PATH}/ic_profile_admin.svg`,
  ic_profile_member: `${ICON_BASE_PATH}/ic_profile_member.svg`,
  ic_member: `${ICON_BASE_PATH}/ic_member.svg`,
  ic_admin: `${ICON_BASE_PATH}/ic_admin.svg`,

  // 텍스트 편집 아이콘
  icon_bold: `${ICON_BASE_PATH}/icon_bold.svg`,
  icon_italic: `${ICON_BASE_PATH}/icon_italic.svg`,
  icon_underline: `${ICON_BASE_PATH}/icon_underline.svg`,
  icon_alignment_left: `${ICON_BASE_PATH}/icon_alignment_left.svg`,
  icon_alignment_center: `${ICON_BASE_PATH}/icon_alignment_center.svg`,
  icon_alignment_right: `${ICON_BASE_PATH}/icon_alignment_right.svg`,
  icon_bullet: `${ICON_BASE_PATH}/icon_bullet.svg`,
  icon_numbering: `${ICON_BASE_PATH}/icon_numbering.svg`,
  icon_coloring: `${ICON_BASE_PATH}/icon_coloring.svg`,

  // 토글/필터/알림 등
  ic_toggle_down: `${ICON_BASE_PATH}/ic_toggle_down.svg`,
  ic_toggle_up: `${ICON_BASE_PATH}/ic_toggle_up.svg`,
  ic_filter: `${ICON_BASE_PATH}/ic_filter.svg`,
  ic_bell: `${ICON_BASE_PATH}/ic_bell.svg`,

  // 캘린더, 비밀번호 가시성 등
  icon_calendar: `${ICON_BASE_PATH}/icon_calendar.svg`,
  btn_visibility_off: `${ICON_BASE_PATH}/btn_visibility_off.svg`,
  btn_visibility_on: `${ICON_BASE_PATH}/btn_visibility_on.svg`,

  // 하트/문서/플러스/나가기 등
  icon_heart_active: `${ICON_BASE_PATH}/icon_heart_active.svg`,
  icon_heart_inactive: `${ICON_BASE_PATH}/icon_heart_inactive.svg`,
  icon_arrow_right: `${ICON_BASE_PATH}/icon_arrow_right.svg`,
  icon_document: `${ICON_BASE_PATH}/icon_document.svg`,
  icon_plus: `${ICON_BASE_PATH}/icon_plus.svg`,
  ic_out_circle: `${ICON_BASE_PATH}/ic_out_circle.svg`,

  // 기존에 이미 있던 화살표/데드라인 아이콘 이름도 함께 매핑
  ic_arrow_left: `${ICON_BASE_PATH}/ic_arrow_left.svg`,
  ic_arrow_right: `${ICON_BASE_PATH}/ic_arrow_right.svg`,
};
