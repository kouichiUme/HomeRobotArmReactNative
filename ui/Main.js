
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { Header } from 'react-native-elements'
import { NavigationContext } from '@react-navigation/native';


export default class Main extends Component {

    static contextType = NavigationContext;

    static navigationOptions = {
        title: 'Main Screen',
        headerStyle: { backgroundColor: '#aa0000', },
        headerTintColor: 'white',
    };


    constructor(props) {
        super(props);

        this.state = {
            title: 'Main Screen',
            message: 'Main page of Robot ARM',
            information: "information "
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)
        this.runProgrammClicked = this.runProgrammClicked.bind(this)

    }


    render() {


        const styles = StyleSheet.create({
            container: {
                flex: 7,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
            viewColInfo: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start'
            },

            viewCol: {
                flex: 7,
                flexDirection: 'column',

            },
            view1: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }
        });


        return (
            <View style={styles.container}>
                <Header><Text>header</Text></Header>
                <View >
                    <View style={styles.viewColInfo}>
                        <Text>Open up App.js to start working on your app!</Text>
                        <Text>Home Robot Arm Powered by ARSC </Text>
                    </View>
                    <View style={styles.view1}>
                        <Text>Information : </Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={{ flex: 1, backgroundColor: 'blue' }}>Program: </Text>
                        <TextInput style={{ flex: 1, backgroundColor: 'red' }} placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View style={styles.viewCol}>
                        <Button title="Load Program" onPress={this.loadProgramClicked} />
                        <Button title="run program" onPress={this.runProgrammClicked} ></Button>
                        <Button title="FWD" ></Button>
                        <Button title="REV" ></Button>
                        <Button title="STOP" ></Button>

                        <Text>  Infromation : {this.state.information}</Text>
                        <Text >Current Row</Text>
                        <Button title="Next Screen >>" onPress={this.doAction} />
                    </View>
                </View>
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('Jog');
    }

    loadProgramClicked() {
        return "cliecked"
    }

    async runProgrammClicked() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let information = await response.json()
        this.setState({ 'information': information.user })
    }
    changeProgramName() {
        return ""
    }


}

