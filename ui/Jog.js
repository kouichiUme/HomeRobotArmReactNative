
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class Jog extends Component {

    static contextType = NavigationContext;


    constructor(props) {
        super(props);

        this.state = {
            title: 'Jog Screen',
            message: 'Jog page of Robot ARM',
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
            },
        });


        return (
            <View style={styles.container}>
                <Text>Jog</Text>
                <Text>Home Robot Arm Powered by ARSC </Text>

                <Text>Information : </Text>
                <Text>Program: </Text>
                <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                <Button title="Load Program" onPress={this.loadProgramClicked} />
                <Button title="run program" ></Button>
                <Button title="FWD" ></Button>
                <Button title="REV" ></Button>
                <Button title="STOP" ></Button>

                <Text>  Infromation now this is mock</Text>
                <Text >Current Row</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('TeachingCommand');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

