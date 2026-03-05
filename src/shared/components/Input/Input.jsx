import { useState } from 'react';
import {
  field,
  helperText,
  iconButton,
  input,
  inputRoot,
  label as labelStyle,
} from './Input.css.js';
import { Icon } from '@/shared/icons/Icon';

export const Input = ({
  label,
  type = 'text',
  error = false,
  helperText: helper,
  value,
  onChange,
  placeholder,
  showPasswordToggle = false,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const isPassword = type === 'password';

  const inputType =
    isPassword && showPasswordToggle ? (visible ? 'text' : 'password') : type;

  return (
    <div className={inputRoot}>
      {label && <label className={labelStyle}>{label}</label>}
      <div className={field[error ? 'error' : 'default']}>
        <input
          className={input}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
        {/* {type === 'date' && (
          <Icon
            name="icon_calendar"
            width={32}
            height={32}
            aria-hidden="true"
          />
        )} */}
        {isPassword && showPasswordToggle && (
          <button
            type="button"
            className={iconButton}
            onClick={() => setVisible((prev) => !prev)}
            aria-label={visible ? '비밀번호 숨기기' : '비밀번호 보기'}
          >
            <Icon
              name={visible ? 'btn_visibility_on' : 'btn_visibility_off'}
              width={24}
              height={24}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      {helper && (
        <p className={helperText[error ? 'error' : 'default']}>
          {helper}
        </p>
      )}
    </div>
  );
};

