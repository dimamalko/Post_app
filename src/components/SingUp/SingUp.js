// @flow
import './SingUp.scss';
import Button from '../UI/buttons/Button';
import Input from '../UI/inputs/Input';
import React from 'react';
import i18n from '../../services/i18n';

export default function SingUp() {
  return (
    <form className="login">
      {i18n.t('general.login')}
      <div className="login__input">
        {i18n.t('general.email')}
        <Input placeholder="Email" type="email" />
      </div>
      <div className="login__input">
        {i18n.t('general.password')}
        <Input placeholder="Password" type="password" />
      </div>
      <div>
        <Button primary type="button">
          {i18n.t('general.login')}
        </Button>
      </div>
    </form>
  );
}
