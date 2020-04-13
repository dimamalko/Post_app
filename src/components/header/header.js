import './Header.scss';
import Logo from '../../assets/Images/logo.png';
import React from 'react';
import i18n from '../../services/i18n';

export default function Header() {
  return (
    <div className="header">
      <nav className="header__bar">
        <img className="header__bar--img" src={Logo} alt="logo" />
        <div className="header__navigation">
          <a className="header__bar--destination" href="/">
            {i18n.t('general.home')}
          </a>
          <a className="header__bar--destination" href="/About">
            {i18n.t('general.about')}
          </a>
          <a className="header__bar--destination" href="/Contact">
            {i18n.t('general.contact')}
          </a>
        </div>
      </nav>
      <img className="header__logo" src={Logo} alt="logo" />
    </div>
  );
}
