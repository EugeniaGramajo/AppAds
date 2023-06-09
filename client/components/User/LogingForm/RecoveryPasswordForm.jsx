import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";



export default function RecoveryPassword(){
    return(
<View className="flex justify-center items-center bg-darkBlue h-full">
<Text className="text-xl text-white m-2">Forgot your password?</Text>
<Text className="text-sm text-white m-2">Enter the e-mail address you used to register.</Text>
<TextInput className="bg-textBlue text-black h-14 rounded-md w-11/12 p-2 m-1 shadow-2xl shadow-white" placeholder="Email"/>
<Pressable className="bg-cyan-300 h-14 w-1/2 items-center rounded-md m-2 shadow-2xl shadow-buttonBlue">
    <Text className="flex justify-center items-center m-auto">Send Email</Text>
</Pressable>
</View>
)
}