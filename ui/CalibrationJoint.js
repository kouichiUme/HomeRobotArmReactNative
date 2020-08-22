import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class CalibrationJoint extends Component {

    static contextType = NavigationContext;



    constructor(props) {
        super(props);

        this.state = {
            title: 'Log Screen',
            message: 'Main page of Robot ARM',
            calibrationJoint: {}
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)

        this.fetchAutoCalibrationInfo = this.fetchAutoCalibrationInfo.bind(this)

        this.fetchAutoCalibrationInfo()

    }




    async fetchAutoCalibrationInfo() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/calibration/joint',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let calibrationJoint = await response.json()
        this.setState({ 'calibrationJoint': calibrationJoint })

    }

    render() {


        const styles = StyleSheet.create({
            container: {
                flex: 25,
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

                <Button title="Update Calibration Values" onPress={this.doAction} />
                <Text>CalibrationParameters!</Text>

                <View style={styles.col}>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j1NegAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J1 Negative Angle Limit </Text>
                    </View>

                    <View style={styles.row}>
                        <TextInput placeholder="    " value={String(this.state.calibrationJoint.j1PostitiveAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J1 Positive Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j1StepLimit)} onChangeText={this.changeProgramName} />
                        <Text>J1 Step Limit </Text>
                    </View>
                </View>

                <View style={styles.col}>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j2NegAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J2 Negative Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="  " value={String(this.state.calibrationJoint.j2PostitiveAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J2 Positive Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="   a" value={String(this.state.calibrationJoint.j2StepLimit)} onChangeText={this.changeProgramName} />
                        <Text>J2 Step Limit </Text>
                    </View>
                </View>

                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j3NegAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J3 Negative Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j3PostitiveAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J3 Positive Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j3StepLimit)} onChangeText={this.changeProgramName} />
                        <Text>J3 Step Limit </Text>
                    </View>

                </View>
                <View style={styles.col}>
                    <View style={styles.row} >
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j4NegAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J4 Negative Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j4PostitiveAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J4 Positive Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j4StepLimit)} onChangeText={this.changeProgramName} />
                        <Text>J4 Step Limit </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j5NegAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J5 Negative Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="  " value={String(this.state.calibrationJoint.j5PostitiveAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J5 Positive Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="  " value={String(this.state.calibrationJoint.j5StepLimit)} onChangeText={this.changeProgramName} />
                        <Text>J5 Step Limit </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <TextInput placeholder="  " value={String(this.state.calibrationJoint.j6NegAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J6 Negative Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j6PostitiveAngleLimit)} onChangeText={this.changeProgramName} />
                        <Text>J6 Positive Angle Limit </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.j6StepLimit)} onChangeText={this.changeProgramName} />
                        <Text>J6 Step Limit </Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.trackLength)} onChangeText={this.changeProgramName} />
                        <Text>Track Length </Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder="   " value={String(this.state.calibrationJoint.trackStepLimit)} onChangeText={this.changeProgramName} />
                        <Text>Track Step Limit </Text>
                    </View>
                </View>


                <Text>  Infromation now this is mock</Text>
                <Text >Current Row</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View >
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('CalibrationDistance');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

