// @flow
import './Card.scss';
import React from 'react';
import i18n from '../../services/i18n';

export default function Card() {
  return <div className="card">{i18n.t('kurva')}</div>;
}
