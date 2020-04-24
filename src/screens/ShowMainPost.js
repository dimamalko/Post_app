import './ShowMainPost.scss';
import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
import { useParams } from 'react-router-dom';

function usePerson(id) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const dissconect = firebase
      .firestore()
      .doc(`mainPosts/${id}`)
      .onSnapshot(snapshot => {
        if (snapshot.exists) {
          setInfo(snapshot.data());
        }
      });
    return () => dissconect();
  }, [id]);
  return info;
}

export default function UserInfo() {
  const { _id } = useParams();
  const info = usePerson(_id);

  return (
    <div className="userdetail">
      <div key={info.id} className="userdetail__info">
        <p>{info.title}</p>
        <p>{info.text}</p>
      </div>
    </div>
  );
}
