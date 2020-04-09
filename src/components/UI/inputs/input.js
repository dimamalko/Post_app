// @flow
import './Input.scss';
import React from 'react';

export default function Input({ placeholder, type, onChange, value, width }) {
  return (
    <input
      className={`input ${width ? 'input__width' : ''}`}
      onChange={e => {
        onChange(e.target.value);
      }}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}
