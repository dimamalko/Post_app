import './header.scss';
import React from 'react';
import i18n from '../../services/i18n';

export default function Header() {
  return (
    <div className="header">
      <nav className="header__navigation">
        <a>{i18n.t('home')}</a>
        <a>{i18n.t('about')}</a>
        <a>{i18n.t('contact')}</a>
      </nav>
    </div>
  );
}
