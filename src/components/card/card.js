// @flow
import './Card.scss';
import React from 'react';
//import i18n from '../../services/i18n';

export default function Card({ children }) {
  return <div className="card">{children}</div>;
}
