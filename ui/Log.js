import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput, ListView } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class Log extends Component {

    static contextType = NavigationContext;



    constructor(props) {
        super(props);

        this.state = {
            title: 'Log Screen',
            message: 'Main page of Robot ARM',
            log : []
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)

        this.fetchLog = this.fetchLog.bind(this)
        this.fetchLog()

    }

    async fetchLog() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/log',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let log = await response.json()
        this.setState({ 'log': log.log })
    }


    render() {


        const styles = StyleSheet.create({
            container: {
                flex: 24,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
            bigcContent: {
                flex: 22,
            }
        });


        return (
            <View style={styles.container}>
                <View style={styles.bigcContent}>
                    <Text>Log!</Text>
                </View>
                {this.state.log.map(logLine => {
                    return <Text>{logLine}</Text>
                })}
                <Button title="Clear Log" onPress={this.doAction} />

                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('Information');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

