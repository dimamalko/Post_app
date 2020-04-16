import * as React from 'react';
import firebase from '../firebase';

const { useEffect, useState } = React;
const db = firebase.firestore();

/* Context */

const SessionContext = React.createContext({});

export default SessionContext;

/* Provider */

const SessionProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribe = null;

    const handleAuthStateChanged = user => {
      console.log('USER', user);
      if (!user) {
        setCurrentUser(null);

        return;
      }
      unsubscribe = db.doc(`users/${user.uid}`).onSnapshot(userSnap => {
        console.log('SNAP', userSnap);
        if (userSnap.exists) {
          const userData = userSnap.data();
          console.log('DATA', userData);
          setCurrentUser({
            ...userData,
            userId: user.uid
          });
        }
      });
    };

    // firebase.auth().onAuthStateChanged(handleAuthStateChanged);

    firebase.auth().onAuthStateChanged(User => console.log('USER2', User));

    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  return (
    <SessionContext.Provider value={{ currentUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider };
