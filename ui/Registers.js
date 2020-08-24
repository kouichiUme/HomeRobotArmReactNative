
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class Registers extends Component {

    static contextType = NavigationContext;

    static navigationOptions = {
        title: 'Registers Screen',
        headerStyle: { backgroundColor: '#aa0000', },
        headerTintColor: 'white',
    };


    constructor(props) {
        super(props);

        this.state = {
            title: 'Registers Screen',
            message: 'Registers page of Robot ARM',
            register: [{}]
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)
        this.fetchRegisterInfo = this.fetchRegisterInfo.bind(this)

        // registers
    }

    async fetchRegisterInfo() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/register',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let registgerMessage = await response.json()
        this.setState({ 'register': registerMessage.servo })



    }


    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
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
                flex: 5,
                // flexDirection: 'column',
                backgroundColor: '#0f0',
            }
        });


        return (
            <View style={styles.container}>
                <Text>Registers</Text>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R1</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R2</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R3</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R4</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R5</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R6</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R7</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R8</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R9</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R10</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R11</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R12</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R13</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R14</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R15</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R16</Text>
                </View>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('StorePositions');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

