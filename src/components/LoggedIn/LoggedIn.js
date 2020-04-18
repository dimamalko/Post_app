// @flow
import './LoggedIn.scss';
import React, { useContext, useEffect, useState } from 'react';
import SessionContext from '../../context/SessionContext';
import firebase from '../../firebase';
import i18n from '../../services/i18n';

export default function SingIn(children) {
  const [info, setInfo] = useState([]);

  const { currentUser } = useContext(SessionContext);
  console.log('Curent user', currentUser);
  useEffect(() => {
    const dissconect = firebase
      .firestore()
      .doc(`users/${currentUser.userId}`)
      .onSnapshot(snapshot => {
        if (snapshot.exists) {
          setInfo(snapshot.data());
        }
      });
    return () => dissconect();
  }, [currentUser.userId]);

  return (
    <div className="logged" key={info.id}>
      <p>
        {i18n.t('Logged.welcome')}
        {info.name}
        {i18n.t('Logged.dot')}
      </p>
      <p className="logged__para">{i18n.t('Logged.add')}</p>
    </div>
  );
}
