// @flow
import './buttons.scss';
import React from 'react';

export default function Button({ children, onClick, primary, type }) {
  return (
    <button
      className={`button ${primary ? 'primary' : ''}`}
      onClick={() => onClick()}
      type={type}
    >
      {children}
    </button>
  );
}
