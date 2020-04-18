import './About.scss';
import React from 'react';
import i18n from '../services/i18n';

export default function About() {
  return (
    <div className="about">
      <h3 className="about__heading">{i18n.t('about.aboutUs')}</h3>
      <p className="about__text">{i18n.t('about.text')}</p>
      <p className="about__text">{i18n.t('about.textTwo')}</p>
    </div>
  );
}
