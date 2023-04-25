import React from "react";
import { Pressable, Text, TextInput, View ,Button} from "react-native";


export default function RegisterForm() {
    const stylesInput=className="text-white items-center bg-textBlue w-9/12 h-14 rounded-md p-2 m-1"
    return (
        <View className="flex justify-center items-center bg-darkBlue h-full">  
            <Text className="text-white text-xl">Welcome</Text>
            <TextInput className={stylesInput} placeholder="Email" value="" />
            <TextInput className={stylesInput} placeholder="Repeat Email" value="" />
            <TextInput className={stylesInput} placeholder="Password" value="" secureTextEntry/>
            <TextInput className={stylesInput} placeholder="Repeat Password" value="" secureTextEntry/>
            <Pressable className="bg-buttonBlue h-14 w-1/3 items-center rounded-md m-1 shadow-2xl shadow-buttonBlue">
                <Text className="flex justify-center items-center m-auto">Register</Text>
            </Pressable>
        </View>
    )
}