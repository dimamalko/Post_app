// @flow
import './SingIn.scss';
import React, { useState } from 'react';
import Button from '../UI/buttons/Button';
import firebase from '../../firebase';
import Input from '../UI/inputs/Input';
import i18n from '../../services/i18n';

export default function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="login">
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
        <Button primary type="button">
          {i18n.t('general.login')}
        </Button>
      </div>
    </form>
  );
}
