import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../LogingForm/LoginForm';
import RegisterForm from '../LogingForm/RegisterForm';
import RecoveryPasswordForm from '../LogingForm/RecoveryPasswordForm';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../../Home/HomeScreen";


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginForm" screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="RegisterForm" component={RegisterForm} />
        <Stack.Screen name="RecoveryPasswordForm" component={RecoveryPasswordForm} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
