import React, { useState } from "react";
import { Pressable, Text, TextInput, View ,Button} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegisterForm() {
    const [email, setEmail, ] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    
    const handleRegister = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };


    const stylesInput=className="text-white items-center bg-textBlue w-9/12 h-14 rounded-md p-2 m-1"
    return (
        <View className="flex justify-center items-center bg-darkBlue h-full">  
            <Text className="text-white text-xl">Welcome</Text>
            <TextInput className={stylesInput} placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput className={stylesInput} placeholder="Repeat Email" value={email} onChangeText={setEmail}/>
            <TextInput className={stylesInput} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>
            <TextInput className={stylesInput} placeholder="Repeat Password" value={password} onChangeText={setPassword} secureTextEntry/>
            <Pressable className="bg-buttonBlue h-14 w-1/3 items-center rounded-md m-1 shadow-2xl shadow-buttonBlue">
                <Text onPress={handleRegister} className="flex justify-center items-center m-auto">Register</Text>
            </Pressable>
        </View>
    )
}