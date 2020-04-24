import './MainPost.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

export default function MainPost() {
  const [mainPost, setMainPost] = useState([]);
  useEffect(() => {
    const dissconect = firebase
      .firestore()
      .collection('mainPosts')
      .onSnapshot(snapshot => {
        console.log('snapshot', snapshot);
        const newMainPosts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMainPost(newMainPosts);
      });
    return () => dissconect();
  }, []);
  console.log('mainposts', mainPost);
  // console.log('ONsnapshot', onSnapshot);
  return (
    <div className="main">
      {mainPost.map(singlePost => (
        <div key={singlePost.id} className="main__title">
          <Link to={'/MainPost/' + singlePost.id}>{singlePost.title}</Link>
        </div>
      ))}
    </div>
  );
}
