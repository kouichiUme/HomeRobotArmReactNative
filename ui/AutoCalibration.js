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
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)
    }


    render() {


        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }, jogLabel: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }
        });


        return (
            <View style={styles.container}>
                <Text>AutoCalibration!</Text>
                <View style={styles.jogLabel}>
                    <Text>X : </Text>
                    <Button title=" Auto Calibrate " onPress={this.doAction}></Button>
                    <Button title=" Calibrate @ Rest Position " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Button title=" Excecute Fine Calibration "></Button>
                    <Button title=" Teach Fine Calibration "></Button>
                    <Button title=" Go To Fine Calibration "></Button>
                    <Text>Fine Calibration Position : </Text>
                    <TextInput placeholder="20" value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                </View>
                <View style={styles.jogLabel}>
                    <View>
                        <Button title="Calibrate J1 Only"></Button>
                        <Button title="Calibrate J2 Only"></Button>
                        <Button title="Calibrate J3 Only"></Button>
                        <Button title="Calibrate J4 Only"></Button>
                        <Button title="Calibrate J5 Only"></Button>
                        <Button title="Calibrate J6 Only"></Button>
                    </View>
                    <View>
                        <Button title="Calibrate Track To 0"></Button>
                    </View>
                </View>
                <View style={styles.jogLabel}>
                    <View>
                        <TextInput placeholder="20" value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                        <Text>Calibration Directions (default = 001001) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="20" value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                        <Text>Motor Direction Oputput (default = 000000) </Text>
                    </View>
                </View>
                <View style={styles.jogLabel}>
                    <View>
                        <CheckBox placeholder="20" value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                        <Text>J1 Open Loop (disable encoder)</Text>
                    </View>
                    <View>
                        <CheckBox value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                        <Text>J2 Open Loop (disable encoder) </Text>
                    </View>
                    <View>
                        <CheckBox value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                        <Text>J3 Open Loop (disable encoder) </Text>
                    </View>
                    <View>
                        <CheckBox value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                        <Text>J4 Open Loop (disable encoder) </Text>
                    </View>
                    <View>
                        <CheckBox value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                        <Text>J5 Open Loop (disable encoder) </Text>
                    </View>
                    <View>
                        <CheckBox value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                        <Text>J6 Open Loop (disable encoder) </Text>
                    </View> 
                </View>
                <View >
                    <Text>Information : </Text>
                    <Text>Program: </Text>

                    <Text>  Infromation now this is mock</Text>
                    <Text >Current Row</Text>
                    <Button title="Next Screen >>" onPress={this.doAction} />
                </View>
            </View>
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

