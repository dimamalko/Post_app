import './Home.scss';
import MainPost from '../components/MainPost/MainPost';
import SmallPost from '../components/SmallPost/Smallpost';
import React from 'react';
// import i18n from '../services/i18n';

export default function Home() {
  return (
    <div>
      <MainPost />
      <SmallPost />
    </div>
  );
}
