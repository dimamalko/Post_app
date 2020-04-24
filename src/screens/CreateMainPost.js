import './CreatePost.scss';
import React, { useContext, useState } from 'react';
import Button from '../components/UI/buttons/Button';
import Input from '../components/UI/inputs/Input';
import SessionContext from '../context/SessionContext';
import firebase from '../firebase';
import i18n from '../services/i18n';

const db = firebase.firestore();

export default function CreateMainPost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const { currentUser } = useContext(SessionContext);

  const addPost = async () => {
    const data = {
      creatorId: db.doc(`users/${currentUser.userId}`),
      creatorName: db.doc(`users/${currentUser.surrname}`),
      text,
      title
    };

    await db
      .collection(`mainPosts`)
      .add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(setTitle(''), setText(''));
  };
  return (
    <div className="post">
      <p>{i18n.t('post.mainTitle')}</p>
      <Input onChange={setTitle} title type="text" value={title} />
      <p>{i18n.t('post.mainText')}</p>
      <Input
        className="post__text"
        onChange={setText}
        type="text"
        value={text}
      />
      <div className="post__btn">
        <Button medium onClick={e => addPost(e)} primary type="submit">
          {i18n.t('post.btn')}
        </Button>
      </div>
    </div>
  );
}
