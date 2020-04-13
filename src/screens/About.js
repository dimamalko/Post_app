import './About.scss';
import React from 'react';
import i18n from '../services/i18n';

export default function About() {
  return <div>{i18n.t('About')}</div>;
}
