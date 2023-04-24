import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet , Text,Pressable} from 'react-native';
import { user } from '../../../Data/Data';

const LoginForm = () => {
  const [email, setEmail, ] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de inicio de sesión aquí
    if (email === user.email && password === user.password) {
      alert('Inicio de sesión exitoso');
      setEmail("");
      setPassword("")
    } else {
      alert('Credenciales incorrectas');
      setEmail("");
      setPassword("")
    }
  };
 
  return (
    <View className="flex  w-9/12 h-36 items-center">
        <Text className="text-xl text-white m-2">Welcome!!!</Text>
      <TextInput
        className="bg-textBlue text-black h-2/6 rounded-md w-11/12 p-2 m-1 shadow-2xl shadow-white"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        className="bg-textBlue text-black h-2/6 rounded-md w-11/12 p-2 m-1 shadow-2xl shadow-white"
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Pressable className="bg-cyan-300 h-2/6 w-1/2 items-center rounded-md m-2 shadow-2xl shadow-buttonBlue" onPress={handleLogin}>
        <Text className="flex justify-center items-center m-auto">Sign In</Text>
        
      </Pressable>
      <Pressable className="bg-cyan-500 h-2/6 w-1/2 items-center rounded-md m-1 shadow-2xl shadow-buttonBlue">
        <Text className="flex justify-center items-center m-auto">Register</Text>
      </Pressable>
      <Text>forgot your password?</Text>
    </View>
  );
};

export default LoginForm;
