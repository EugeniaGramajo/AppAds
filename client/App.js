import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import LoginForm from "./components/User/LogingForm/LoginForm";


export default function App() {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-darkBlue">
        <LoginForm/>
      </View>
    </>
  );
}
