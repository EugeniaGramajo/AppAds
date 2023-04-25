import React from "react";
import Navigation from "./components/User/Navigation/Navigation";
import firebase from '@react-native-firebase/app';
import Config from 'react-native-config';

const firebaseConfig = {
  apiKey: Config.API_KEY,
  authDomain: `${Config.PROJECT_ID}.firebaseapp.com`,
  databaseURL: Config.DATABASE_URL,
  projectId: Config.PROJECT_ID,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MESSAGING_SENDER_ID,
  appId: Config.APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


function App() {
  return (
    <>
       <Navigation/> 
    </>
  );
}

module.exports={
  App, firebase
}