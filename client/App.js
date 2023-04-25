import React from "react";
import { View } from "react-native";
import Navigation from "./components/User/Navigation/Navigation";
import firebase from '@react-native-firebase/app';
import { API_KEY, PROJECT_ID, DATABASE_URL, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
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