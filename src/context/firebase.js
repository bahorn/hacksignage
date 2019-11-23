/* Read in the config */
import React from 'react';
import firebase from 'firebase';
import Config from '../config.json';

const instance = firebase.initializeApp(Config.firebase);
const db = firebase.firestore();

export const FirebaseContext = React.createContext({
  firebase: instance,
  database: db,
  isLoggedIn: false,
});
