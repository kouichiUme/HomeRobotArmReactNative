import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class CalibrationWorkUnit extends Component {

    static contextType = NavigationContext;



    constructor(props) {
        super(props);

        this.state = {
            title: 'Log Screen',
            message: 'Main page of Robot ARM',
            frameUnit: {"workFrame":{},"toolFrame":{}}
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)
        this.fetchWorkUnitInformation = this.fetchWorkUnitInformation.bind(this)

        this.fetchWorkUnitInformation()


    }

    async fetchWorkUnitInformation(){
        
        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/calibration/frameUnit',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let frameUnit = await response.json()
        this.setState({ 'frameUnit': frameUnit })
    }


    render() {


        const styles = StyleSheet.create({
            container: {
                flex: 5,
                backgroundColor: '#fff',
                alignItems: 'center',
                // justifyContent: 'center',
            },
            row: {
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#0f0',

            },
            col: {
                flex: 1,
                // flexDirection: 'column',
                backgroundColor: '#0f0',
            }
        });


        return (
            <View style={styles.container}>
                <Text>CalibrationWorkUnit!</Text>

                <View style={styles.col}>
                    <View style={styles.row}>
                        <Text >   </Text>
                        <Text > X </Text>
                        <Text > Y </Text>
                        <Text > Z </Text>
                        <Text > Rx </Text>
                        <Text > Ry </Text>
                        <Text > Rz </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Text>WorkFrame : </Text>
                        <TextInput placeholder="0" value={String(this.state.frameUnit.workFrame.x)} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={String(this.state.frameUnit.workFrame.y)} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={String(this.state.frameUnit.workFrame.z)} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={String(this.state.frameUnit.workFrame.rx)} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={String(this.state.frameUnit.workFrame.ry)} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={String(this.state.frameUnit.workFrame.rz)} onChangeText={this.changeProgramName} />
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Text>Tool Frame : </Text>
                        <TextInput placeholder="0" value={String(this.state.frameUnit.toolFrame.x)} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={String(this.state.frameUnit.toolFrame.y)} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={String(this.state.frameUnit.toolFrame.z)} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={String(this.state.frameUnit.toolFrame.rx)} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={String(this.state.frameUnit.toolFrame.ry)} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={String(this.state.frameUnit.toolFrame.rz)} onChangeText={this.changeProgramName} />
                    </View>
                </View>

                <Button title="Save Calibration" onPress={this.loadProgramClicked} />

                <Text>  Infromation now this is mock</Text>
                <Text >Current Row</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('ServoControl');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

