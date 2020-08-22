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
                // justifyContent: 'center',
            },
        });


        return (
            <View style={styles.container}>
                <Text>DH Parameters</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
                <View>
                    <View>
                        <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-1 (link twist) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-2 (link twist) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-3 (link twist) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-4 (link twist) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-5 (link twist) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH alpha-6 (link twist) </Text>
                    </View>
                </View>
                <View>
                    <View>
                        <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH a-1 (link length) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH a-2 (link length) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH a-3 (link length) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH a-4 (link length) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH a-5 (link length) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH a-6 (link length) </Text>
                    </View>

                    {/*  dh d-1  */}
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH d-1 (link offset) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH d-2 (link offset) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH d-3 (link offset) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH d-4 (link offset) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH d-5 (link offset) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH d-6 (link offset) </Text>
                    </View>
                {/* dh theta */}
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH theta-1 (joint angle) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH theta-2 (joint angle) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH theta-3 (joint angle) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH theta-4 (joint angle) </Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
                        <Text>DH theta-5 (joint angle)</Text>
                    </View>
                    <View>
                        <TextInput placeholder="0.0" value={this.programName} onChangeText={this.changeProgramName} />
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

