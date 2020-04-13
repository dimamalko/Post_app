// @flow
import './Sidebar.scss';
import React, { useState } from 'react';
import SingIn from '../SingIn/SingIn';
import SingUp from '../SingUp/SingUp';
import i18n from '../../services/i18n';

export default function Sidebar() {
  const [status, setStatus] = useState('singUp');

  const showContent = () => {
    switch (status) {
      case 'singUp':
        return (
          <div>
            <SingIn />
            <div
              className="btn"
              onClick={() => {
                setStatus('singIn');
              }}
            >
              {i18n.t('general.register')}
            </div>
          </div>
        );
      case 'singIn':
        return (
          <div>
            <SingUp />
            <div
              className="btn btn__back"
              onClick={() => {
                setStatus('singUp');
              }}
            >
              {i18n.t('general.login')}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return <div className="sidebar">{showContent()}</div>;
}
