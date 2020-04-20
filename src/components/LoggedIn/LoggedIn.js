// @flow
import './LoggedIn.scss';
import React, { useContext, useEffect, useState } from 'react';
import SessionContext from '../../context/SessionContext';
import firebase from '../../firebase';
import i18n from '../../services/i18n';
import { Link } from 'react-router-dom';

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
        {i18n.t('logged.welcome')}
        {info.name}
        {i18n.t('logged.dot')}
      </p>
      <p className="logged__para">{i18n.t('logged.add')}</p>
      <Link className="logged__post" to="/NewPost">
        {i18n.t('logged.create')}
      </Link>
    </div>
  );
}
