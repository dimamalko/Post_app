// @flow
import './SingUp.scss';
import React, { useState } from 'react';
import Button from '../UI/buttons/Button';
import Input from '../UI/inputs/Input';
import firebase from '../../firebase';
import i18n from '../../services/i18n';

const db = firebase.firestore();

export default function SingUp() {
  const [name, setName] = useState('');
  const [surrname, setSurrname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const newData = {
      email,
      name,
      surrname
    };

    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log('User', user);
    await db.doc(`users/${user.uid}`).set({
      ...newData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  };

  return (
    <form className="singIn">
      {i18n.t('general.singUp')}

      <div className="singIn__input">
        {i18n.t('singIn.name')}
        <Input onChange={setName} placeholder="Name" type="text" value={name} />
      </div>
      <div className="singIn__input">
        {i18n.t('singIn.surname')}
        <Input
          onChange={setSurrname}
          placeholder="Surrname"
          type="text"
          value={surrname}
        />
      </div>
      <div className="singIn__input">
        {i18n.t('general.email')}
        <Input
          onChange={setEmail}
          placeholder="Email"
          type="email"
          value={email}
        />
      </div>
      <div className="singIn__input">
        {i18n.t('general.password')}
        <Input
          onChange={setPassword}
          placeholder="Password"
          type="password"
          value={password}
        />
      </div>
      <div>
        <Button onClick={e => handleSubmit(e)} primary type="button">
          {i18n.t('singIn.confirm')}
        </Button>
      </div>
    </form>
  );
}
