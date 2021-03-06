// @flow
import './Button.scss';
import React from 'react';

type Props = {
  +children?: React.Node,
  +onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void | Promise<void>,
  +type?: 'button' | 'reset' | 'submit',
  +primary?: boolean,
  +medium?: boolean
};

export default function Button({
  children,
  onClick,
  primary,
  type,
  medium
}: Props) {
  return (
    <button
      className={`button ${primary ? 'primary' : ''} ${medium ? 'medium' : ''}`}
      onClick={() => onClick()}
      type={type}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: null,
  onClick: () => {},
  primary: false,
  type: 'button'
};
