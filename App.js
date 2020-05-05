import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Main from './ui/Main'
import TeachingCommand from './ui/TeachingCommand'
import Jog from './ui/Jog'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


export default function App() {

  let programName = ""

  return (
    <NavigationContainer>{/* Rest of your app code */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="NEXT" component={TeachingCommand} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

