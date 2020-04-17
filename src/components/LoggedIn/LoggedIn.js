// @flow
import './LoggedIn.scss';
import React from 'react';
import i18n from '../../services/i18n';

export default function SingIn(children) {
  return <div className="logged">{i18n.t('Welcome to our Page')}</div>;
}
