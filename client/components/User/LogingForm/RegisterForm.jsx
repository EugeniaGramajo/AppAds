import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";


export default function RegisterForm() {
    return (
        <View className="flex  w-9/12 h-60 items-center">
            <Text className="text-white text-xl">Welcome</Text>
            <TextInput className="text-white items-center bg-white w-8/12 h-1/6 rounded-md p-2 m-1" placeholder="Name" value=""/>
            <TextInput className="text-white items-center bg-white w-8/12 h-1/6 rounded-md p-2 m-1" placeholder="Email" value="" />
            <TextInput className="text-white items-center bg-white w-8/12 h-1/6 rounded-md p-2 m-1" placeholder="Repeat Email" value="" />
            <TextInput className="text-white items-center bg-white w-8/12 h-1/6 rounded-md p-2 m-1" placeholder="Password" value="" secureTextEntry/>
            <TextInput className="text-white items-center bg-white w-8/12 h-1/6 rounded-md p-2 m-1" placeholder="Repeat Password" value="" secureTextEntry/>
            <Pressable className="bg-buttonBlue h-1/6 w-1/2 items-center rounded-md m-1 shadow-2xl shadow-buttonBlue">
                <Text className="flex justify-center items-center m-auto">Register</Text>
            </Pressable>
        </View>
    )
}