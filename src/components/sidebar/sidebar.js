// @flow
import './Sidebar.scss';
import React, { useContext, useEffect, useState } from 'react';
import LoggedIn from '../LoggedIn/LoggedIn';
import SessionContext from '../../context/SessionContext';
import firebase from '../../firebase';
import SingIn from '../SingIn/SingIn';
import SingUp from '../SingUp/SingUp';
import i18n from '../../services/i18n';

export default function Sidebar() {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const [status, setStatus] = useState('singIn');
  // console.log('STATUS', status);

  const { currentUser } = useContext(SessionContext);
  console.log('CURRENT USER', currentUser);

  useEffect(() => {
    if (currentUser) {
      setStatus('logged');
    }

    return () => {
      setStatus('singIn');
    };
  }, [currentUser]);

  const showContent = () => {
    switch (status) {
      case 'singIn':
        return (
          <div>
            <SingIn />
            <div
              className="btn"
              onClick={() => {
                setStatus('singUp');
              }}
            >
              {i18n.t('general.register')}
            </div>
          </div>
        );
      case 'singUp':
        return (
          <div>
            <SingUp />
            <div
              className="btn btn__back"
              onClick={() => {
                setStatus('singIn');
              }}
            >
              {i18n.t('general.login')}
            </div>
          </div>
        );
      case 'logged':
        return (
          <div>
            <LoggedIn />
            <div
              className="btn btn__back"
              onClick={async () => {
                await handleLogout();
                await setStatus('singIn');
              }}
            >
              {i18n.t('logout')}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return <div className="sidebar">{showContent()}</div>;
}
