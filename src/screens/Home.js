import './Home.scss';
import React from 'react';
import i18n from '../services/i18n';

export default function Home() {
  return <div>{i18n.t('Home')}</div>;
}
