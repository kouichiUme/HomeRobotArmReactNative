import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Main from './ui/Main'
import TeachingCommand from './ui/TeachingCommand'
import Jog from './ui/Jog'
import JogXyz from './ui/JogXyz'
import JogTxyz from './ui/JogTxyz'
import AutoCalibration from './ui/AutoCalibration'
import CalibrationJoint from './ui/CalibrationJoint'
import CalibrationDistance from './ui/CalibrationDistance'
import CalibrationWorkUnit from './ui/CalibrationWorkUnit'
import IoConditions from './ui/IoConditions'
import ServoControl from './ui/ServoControl'
import Registers from './ui/Registers'
import StorePositions from './ui/StorePositions'
import Vision from './ui/Vision'
import Log from './ui/Log'
import Information from './ui/Information'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();


export default function App() {

  let programName = ""

  return (
    <NavigationContainer>{/* Rest of your app code */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Jog" component={Jog} />
        <Stack.Screen name="JogXyz" component={JogXyz} />
        <Stack.Screen name="JogTxyz" component={JogTxyz} />
        <Stack.Screen name="TeachingCommand" component={TeachingCommand} />
        <Stack.Screen name="AutoCalibration" component={AutoCalibration} />
        <Stack.Screen name="CalibrationJoint" component={CalibrationJoint} />
        <Stack.Screen name="CalibrationDistance" component={CalibrationDistance} />
        <Stack.Screen name="CalibrationWorkUnit" component={CalibrationWorkUnit} />
        <Stack.Screen name="ServoControl" component={ServoControl} />
        <Stack.Screen name="IoConditions" component={IoConditions} />
        <Stack.Screen name="Registers" component={Registers} />
        <Stack.Screen name="StorePositions" component={StorePositions} />
        <Stack.Screen name="Vision" component={Vision} />
        <Stack.Screen name="Log" component={Log} />
        <Stack.Screen name="Information" component={Information} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}


