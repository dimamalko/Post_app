// @flow
import './SingIn.scss';
import Button from '../UI/buttons/Button';
import Input from '../UI/inputs/Input';
import React from 'react';
import i18n from '../../services/i18n';

export default function SingIn() {
  return (
    <form className="singIn">
      {i18n.t('general.singIn')}

      <div className="singIn__input">
        {i18n.t('singIn.name')}
        <Input placeholder="Name" type="text" />
      </div>
      <div className="singIn__input">
        {i18n.t('singIn.surname')}
        <Input placeholder="Surrname" type="text" />
      </div>

      <div className="singIn__input">
        {i18n.t('general.email')}
        <Input placeholder="Email" type="email" />
      </div>
      <div className="singIn__input">
        {i18n.t('general.password')}
        <Input placeholder="Password" type="password" />
      </div>
      <div>
        <Button primary type="button">
          {i18n.t('singIn.confirm')}
        </Button>
      </div>
    </form>
  );
}
