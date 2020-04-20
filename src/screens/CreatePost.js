import './CreatePost.scss';
import Input from '../components/UI/inputs/Input';
import React from 'react';
import i18n from '../services/i18n';

export default function CreatePost() {
  return (
    <div className="post">
      <p>{i18n.t('post.title')}</p>
      <Input type="text" />
      <p>{i18n.t('post.text')}</p>
      <Input type="text" />
    </div>
  );
}
