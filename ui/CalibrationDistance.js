import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class CalibrationDistance extends Component {

    static contextType = NavigationContext;



    constructor(props) {
        super(props);

        this.state = {
            title: 'Calibration Distance',
            message: 'Main page of Robot ARM',
            calibrationDistance  : {}
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)

        this.fetchCalibrationDistance = this.fetchCalibrationDistance.bind(this)

        this.fetchCalibrationDistance()
        
    }


    async fetchCalibrationDistance(){

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/calibration/distance',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let calibrationDistance = await response.json()
        this.setState({ 'calibrationDistance': calibrationDistance })

    }

    render() {


        const styles = StyleSheet.create({
            container: {
                flex: 28,
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
            <View style={styles.container} >
                <Text>DH Parameters</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
                <View style={styles.col}>
                    <View style={styles.row}>
                        <TextInput placeholder=" -90.0 " value={String(this.state.calibrationDistance.distanceHa1)} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-1 (link twist) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>

                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHa2)} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-2 (link twist) </Text>
                    </View>
                </View>
                <View style={styles.col} >
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHa3)} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-3 (link twist) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHa4)} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-4 (link twist) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHa5)} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-5 (link twist) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHa6)} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-6 (link twist) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder=" -90.0 " value={String(this.state.calibrationDistance.distanceHa1)} onChangeText={this.changeProgramName} />
                        <Text>DH a-1 (link length) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0"value={String(this.state.calibrationDistance.distanceHa2)} onChangeText={this.changeProgramName} />
                        <Text>DH a-2 (link length) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0"value={String(this.state.calibrationDistance.distanceHa3)} onChangeText={this.changeProgramName} />
                        <Text>DH a-3 (link length) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHa4)}onChangeText={this.changeProgramName} />
                        <Text>DH a-4 (link length) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHa5)}onChangeText={this.changeProgramName} />
                        <Text>DH a-5 (link length) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0"value={String(this.state.calibrationDistance.distanceHa6)} onChangeText={this.changeProgramName} />
                        <Text>DH a-6 (link length) </Text>
                    </View>
                </View>

                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHd1)} onChangeText={this.changeProgramName} />
                        <Text>DH d-1 (link offset) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHd2)} onChangeText={this.changeProgramName} />
                        <Text>DH d-2 (link offset) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHd3)}onChangeText={this.changeProgramName} />
                        <Text>DH d-3 (link offset) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHd4)} onChangeText={this.changeProgramName} />
                        <Text>DH d-4 (link offset) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0"  value={String(this.state.calibrationDistance.distanceHd5)} onChangeText={this.changeProgramName} />
                        <Text>DH d-5 (link offset) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHd6)} onChangeText={this.changeProgramName} />
                        <Text>DH d-6 (link offset) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0"  value={String(this.state.calibrationDistance.distanceHt1)} onChangeText={this.changeProgramName} />
                        <Text>DH theta-1 (joint angle) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHt2)} onChangeText={this.changeProgramName} />
                        <Text>DH theta-2 (joint angle) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHt3)} onChangeText={this.changeProgramName} />
                        <Text>DH theta-3 (joint angle) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHt4)} onChangeText={this.changeProgramName} />
                        <Text>DH theta-4 (joint angle) </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHt5)} onChangeText={this.changeProgramName} />
                        <Text>DH theta-5 (joint angle)</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="0.0" value={String(this.state.calibrationDistance.distanceHt6)}onChangeText={this.changeProgramName} />
                        <Text>DH theta-6 (joint angle) </Text>
                    </View>
                </View>
                <Text>  Infromation now this is mock</Text>
                <Text >Current Row</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('CalibrationWorkUnit');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

