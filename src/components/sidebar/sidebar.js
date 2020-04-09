// @flow
import './sidebar.scss';
import Button from '../UI/buttons/button';
import React from 'react';
import i18n from '../../services/i18n';

export default function Sidebar() {
  return (
    <div className="sidebar">
      {i18n.t('general.login')}
      <div>
        {i18n.t('general.email')}
        <input type="email" />
      </div>
      <div>
        {i18n.t('general.password')}
        <input type="password" />
      </div>
      <div>
        <Button primary type="button">
          {i18n.t('general.login')}
        </Button>
      </div>
    </div>
  );
}
