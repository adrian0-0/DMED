import React from 'react';
import { View, Text } from 'react-native';
import  { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import StartPage from "../components/StartPage/StartPage"
import Sing_in from "../components/Sing_in/Sing_in"
import Congratulations from "../components/Congratulations/Congratulations"


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="StartPage" component={StartPage} options={{headerShown: false}} />
        <Stack.Screen name="Sing_in" component={Sing_in}  options={{headerShown: false}} />
        <Stack.Screen name="Congratulations" component={Congratulations}  options={{headerShown: false}} />
    </Stack.Navigator>
  )
}
