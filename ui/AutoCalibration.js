import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput, CheckBox } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class AutoCalibration extends Component {

    static contextType = NavigationContext;



    constructor(props) {
        super(props);

        this.state = {
            title: 'Log Screen',
            message: 'Main page of Robot ARM',
            calibrationAuto : {}
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)
        this.fetchAutoCalibrationInfo = this.fetchAutoCalibrationInfo.bind(this)
        
        this.fetchAutoCalibrationInfo()

    }


    async fetchAutoCalibrationInfo() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/calibration/auto',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let calibrationAuto = await response.json()
        this.setState({ 'calibrationAuto': calibrationAuto })

    }


    async jogPress(e, jogParam) {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/' + jogParam,
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'
            })
        let move = await response.json()
        this.setState({ 'move': move })
    }

    render() {


        const styles = StyleSheet.create({
            container: {
                flex: 21,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }, jogLabel: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start'
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
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title=" Auto Calibrate " onPress={this.doAction}></Button>
                        <Button title=" Calibrate @ Rest Position " ></Button>
                    </View>
                </View>
                <View style={styles.col} >
                    <View style={styles.row}>
                        <Button title=" Excecute Fine Calibration "></Button>
                        <Button title=" Teach Fine Calibration "></Button>
                    </View>
                </View>
                <View style={styles.col} >
                    <View style={styles.row}>
                        <Text>Fine Calibration Position : </Text>
                        <Button title=" Go To Fine Calibration "></Button>
                    </View>
                </View>
                <View style={styles.col} >
                    <View style={styles.row} >
                        <TextInput placeholder="20" value={this.state.calibrationAuto.fineCalibrationPosition} onChangeText={this.changeProgramName} />
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Calibrate J1 Only"></Button>
                        <Button title="Calibrate Track To 0"></Button>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Calibrate J2 Only"></Button>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>

                        <Button title="Calibrate J3 Only"></Button>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>

                        <Button title="Calibrate J4 Only"></Button>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>

                        <Button title="Calibrate J5 Only"></Button>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>

                        <Button title="Calibrate J6 Only"></Button>
                    </View>
                </View>

                <View style={styles.col}>
                    <View style={styles.row}>
                        <TextInput placeholder="20" value={String(this.state.calibrationAuto.calibrationDirection)} onChangeText={this.changeProgramName} />
                        <Text>Calibration Directions (default = 001001) </Text>
                    </View>
                </View>
                <View style={styles.col} >
                    <View style={styles.row}>
                        <TextInput placeholder="20" value={String(this.state.calibrationAuto.motorDirection)} onChangeText={this.changeProgramName} />
                        <Text>Motor Direction Oputput (default = 000000) </Text>
                    </View>
                </View>

                <View style={styles.col}>
                    <View style={styles.row}>
                        <CheckBox  value={this.state.calibrationAuto.j1openloop} onChangeText={this.changeProgramName} />
                        <Text>J1 Open Loop (disable encoder)</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <CheckBox value={this.state.calibrationAuto.j2openloop} onChangeText={this.changeProgramName} />
                        <Text>J2 Open Loop (disable encoder) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <CheckBox value={this.state.calibrationAuto.j3openloop} onChangeText={this.changeProgramName} />
                        <Text>J3 Open Loop (disable encoder) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <CheckBox value={this.state.calibrationAuto.j4openloop} onChangeText={this.changeProgramName} />
                        <Text>J4 Open Loop (disable encoder) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <CheckBox value={this.state.calibrationAuto.j5openloop} onChangeText={this.changeProgramName} />
                        <Text>J5 Open Loop (disable encoder) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <CheckBox value={this.state.calibrationAuto.j6openloop} onChangeText={this.changeProgramName} />
                        <Text>J6 Open Loop (disable encoder) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <Button title="Next Screen >>" onPress={this.doAction} />
                </View>
            </View >
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('CalibrationJoint');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

