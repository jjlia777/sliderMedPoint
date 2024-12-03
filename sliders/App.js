import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import IntroScreen from './pages/Slider';
import MainScreen from './pages/Inicio'; // Página após o slider

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Slider" component={IntroScreen} />
        <Stack.Screen name="Inicio" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
