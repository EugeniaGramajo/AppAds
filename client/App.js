import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from "./components/User/LogingForm/LoginForm";
import RegisterForm from "./components/User/LogingForm/RegisterForm";
import RecoveryPassword from "./components/User/LogingForm/RecoveryPasswordForm";
import HomeScreen from "./components/Home/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
       <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginForm" screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="RegisterForm" component={RegisterForm} />
        <Stack.Screen name="RecoveryPasswordForm" component={RecoveryPassword} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
