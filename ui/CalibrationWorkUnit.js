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
                <Text>CalibrationWorkUnit!</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
                <View>
                    <Text>WorkFrame : </Text>
                    <View>
                        <Text > X </Text>
                        <Text > Y </Text>
                        <Text > Z </Text>
                        <Text > Rx </Text>
                        <Text > Ry </Text>
                        <Text > Rz </Text>
                    </View>
                </View>
                <View>
                    <Text>WorkFrame : </Text>
                    <View>
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                </View>
                <View>
                    <Text>Tool Frame : </Text>
                    <View>
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
                        <TextInput placeholder="0" value={this.programName} onChangeText={this.changeProgramName} />
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

