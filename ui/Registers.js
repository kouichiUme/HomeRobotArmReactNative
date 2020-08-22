
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
                <Text>Registers</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R1</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R2</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R3</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R4</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R5</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R6</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R7</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R8</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R9</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R10</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R11</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R12</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R13</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R14</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R15</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>R16</Text>
                </View>
                <Text>Infromation now this is mock</Text>
                <Text>Current Row</Text>
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

