import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation'
export default function App() {


  let programName = ""

  createStackNavigator()

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Home Robot Arm Powered by ARSC </Text>

      <Text>Information : </Text>
      <Text>Program: </Text>
      <TextInput placeholder="Program Name" value={programName} onChangeText={changeProgramName} />
      <Button title="Load Program" onPress={loadProgramClicked} />
      <Button title="run program" ></Button>
      <Button title="FWD" ></Button>
      <Button title="REV" ></Button>
      <Button title="STOP" ></Button>

      <Text>  Infromation now this is mock</Text>
      <Text >Current Row</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function loadProgramClicked() {
  return "cliecked"
}


function changeProgramName() {
  return ""
}

