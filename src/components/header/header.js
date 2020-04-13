import './Header.scss';
import React from 'react';
import i18n from '../../services/i18n';

export default function Header() {
  return (
    <div className="header">
      <nav className="header__navigation">
        <a href="/">{i18n.t('general.home')}</a>
        <a href="/About">{i18n.t('general.about')}</a>
        <a href="/Contact">{i18n.t('general.contact')}</a>
      </nav>
    </div>
  );
}
