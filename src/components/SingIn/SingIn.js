// @flow
import './SingIn.scss';
import React, { useState } from 'react';
import Button from '../UI/buttons/Button';
import Input from '../UI/inputs/Input';
// import SessionContext from '../../context/SessionContext';
import firebase from '../../firebase';
import i18n from '../../services/i18n';

export default function SingIn(children) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error('err', err);
    }
  };

  // const { currentUser } = useContext(SessionContext);
  // console.log('prihlasen', currentUser);

  return (
    <div className="login">
      {i18n.t('general.login')}
      <div className="login__input">
        {i18n.t('general.email')}
        <Input
          onChange={setEmail}
          placeholder="Email"
          type="email"
          value={email}
        />
      </div>
      <div className="login__input">
        {i18n.t('general.password')}
        <Input
          onChange={setPassword}
          placeholder="Password"
          type="password"
          value={password}
        />
      </div>
      <div>
        <Button onClick={handleLogin} primary type="submit">
          {i18n.t('general.login')}
        </Button>
      </div>
    </div>
  );
}
