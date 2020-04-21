// @flow
import './Input.scss';
import React from 'react';

export default function Input({
  placeholder,
  type,
  onChange,
  value,
  width,
  title,
  post
}) {
  return (
    <input
      className={`input ${width ? 'input__width' : ''} ${
        title ? 'input__title' : ''
      }`}
      onChange={e => {
        onChange(e.target.value);
      }}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}
