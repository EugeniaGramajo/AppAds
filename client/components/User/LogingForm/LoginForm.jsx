import React, { useState } from 'react';
import { View, TextInput, Text,Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginForm = () => {
  const [email, setEmail, ] = useState('');
  const [password, setPassword] = useState('');

  const signInUser = (email, password) => {
    auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log('Usuario inició sesión exitosamente: ', user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error al iniciar sesión: ', errorMessage);
    });
  }

  const handleLogin = () => {
  signInUser(email, password)
  };

  return (
    <View className="flex  w-9/12 h-36 items-center">
        <Text className="text-xl text-white m-2">Bienvenidos</Text>
      <TextInput
        className="bg-gray-100 text-black h-2/6 rounded-xl w-11/12 p-2 m-1 shadow-2xl shadow-white"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        className="bg-gray-100 text-black h-2/6 rounded-xl w-11/12 p-2 m-1a shadow-2xl shadow-white"
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Pressable className="bg-buttonBlue h-2/6 w-1/2 items-center rounded-2xl m-1 shadow-2xl shadow-buttonBlue" onPress={handleLogin}>
        <Text className="flex justify-center items-center m-auto">Sign In</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
