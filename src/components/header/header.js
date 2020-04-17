import './Header.scss';
import Logo from '../../assets/Images/logo.png';
import React from 'react';
import i18n from '../../services/i18n';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <nav className="header__bar">
        <img alt="logo" className="header__bar--img" src={Logo} />
        <div className="header__navigation">
          <Link className="header__bar--destination" to="/Home">
            {i18n.t('general.home')}
          </Link>
          <Link className="header__bar--destination" to="/About">
            {i18n.t('general.about')}
          </Link>
          <Link className="header__bar--destination" to="/Contact">
            {i18n.t('general.contact')}
          </Link>
        </div>
      </nav>
      <img alt="logo" className="header__logo" src={Logo} />
    </div>
  );
}
