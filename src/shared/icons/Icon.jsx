import PropTypes from 'prop-types';
import { iconPaths } from './iconPaths.js';

// 공통 Icon 컴포넌트
// 사용 예시:
// <Icon name="ic_search" width={24} height={24} />

export const Icon = ({ name, alt, width = 24, height = 24, ...rest }) => {
  const src = iconPaths[name];

  if (!src) {
    // 존재하지 않는 아이콘 키인 경우 아무것도 렌더링하지 않음
    return null;
  }

  const ariaLabel = alt || name;

  return (
    <img
      src={src}
      alt={ariaLabel}
      width={width}
      height={height}
      {...rest}
    />
  );
};

Icon.propTypes = {
  // Figma 아이콘 이름 (iconPaths 키)
  name: PropTypes.oneOf(Object.keys(iconPaths)).isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

