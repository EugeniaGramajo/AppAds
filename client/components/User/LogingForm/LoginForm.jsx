import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet , Text,Pressable} from 'react-native';
import { user } from '../../../Data/Data';

const LoginForm = ({navigation}) => {
  const [email, setEmail, ] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === user.email && password === user.password) {
      alert('Inicio de sesión exitoso');
      setEmail("");
      setPassword("")
      //--------------------------------
      //asi se direciona hacia la ruta especifica
      navigation.navigate('HomeScreen')
      //---------------------------------
    } else {
      alert('Credenciales incorrectas');
      setEmail("");
      setPassword("")
    }
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
