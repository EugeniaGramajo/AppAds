import React, { useState } from 'react';
import { View, TextInput, Text,Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginForm = ({navigation}) => {
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
  const handleRegister = () => {
    navigation.navigate('RegisterForm');
  };

  const handleForgotPassword = () => {
    navigation.navigate('RecoveryPasswordForm');
  };

  
  return (
    <View className="flex justify-center items-center bg-darkBlue h-full">
        <Text className="text-xl text-white m-2">Welcome!!!</Text>
      <TextInput
        className="bg-textBlue text-black rounded-md w-11/12 p-2 m-1 shadow-2xl shadow-white "
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        className="bg-textBlue text-black rounded-md w-11/12 p-2 m-1 shadow-2xl shadow-white"
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Pressable className="bg-cyan-300 h-14 w-1/2 items-center rounded-md m-2 shadow-2xl shadow-buttonBlue" onPress={handleLogin}>
        <Text className="flex justify-center items-center m-auto">Sign In</Text>
        
      </Pressable>
      <Pressable className="bg-cyan-500 h-14 w-1/2 items-center rounded-md m-1 shadow-2xl shadow-buttonBlue" onPress={handleRegister}>
        <Text className="flex justify-center items-center m-auto">Register</Text>
      </Pressable>
      <Text className="text-white underline" onPress={handleForgotPassword}>forgot your password?</Text>
    </View>
  );
};

export default LoginForm;
