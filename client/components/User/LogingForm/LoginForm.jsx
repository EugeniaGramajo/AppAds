import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet , Text,Pressable, Image} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import googleIcon from '../../../assets/google-icon.png'
import app from '../../../firebase-config.js'

const LoginForm = ({navigation}) => {
  const [email, setEmail, ] = useState('');
  const [password, setPassword] = useState('');

const auth=getAuth(app);

  const handleLogin = () => {
     signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      console.log("Signed in!!")
      const user = userCredential.user;
      
    })
    .catch(error=>{
      console.log(error,"hola soy el catch login")

    })
     
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
      <View className="h-11 w-9/12 items-center flex flex-row justify-center m-2">
      <Pressable className="bg-red-600 h-11 w-1/2 items-center rounded-md m-2 shadow-2xl shadow-buttonBlue" onPress={handleLogin}>
        <Text className="flex justify-center items-center m-auto font-medium">Sign In</Text>
      </Pressable>
      <Pressable className="bg-white h-11 w-1/2 items-center rounded-md shadow-2xl shadow-buttonBlue flex-row m-1 p-1" onPress="">
        <Image source={googleIcon} className="w-5 h-5 m-auto"/>
        <Text className="flex justify-center items-center m-auto font-bold"> Sign in with Google</Text>
      </Pressable>
      </View>
      <Pressable className="bg-green-600 h-11 w-1/2 items-center rounded-md m-1 shadow-2xl shadow-buttonBlue" onPress={handleRegister}>
        <Text className="flex justify-center items-center m-auto font-medium">Register</Text>
      </Pressable>
      <Text className="text-white underline font-medium" onPress={handleForgotPassword}>Forgot your password?</Text>
    </View>
  );
};

export default LoginForm;
