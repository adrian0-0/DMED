import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import Routes from './src/routes/Routes'
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} backgroundColor="#38A69D"></StatusBar>
      <Routes></Routes>
    </NavigationContainer>
  );
}