// @flow
import './sidebar.scss';
import React from 'react';
import i18n from '../../services/i18n';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>{i18n.t('sidebar.title')}</div>
      <input type="text" />
    </div>
  );
}
