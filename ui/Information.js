import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class Information extends Component {

    static contextType = NavigationContext;



    constructor(props) {
        super(props);

        this.state = {
            title: 'Log Screen',
            message: 'Main page of Robot ARM',
            infos : []
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)


        this.fetchInformation()

    }


    async fetchInformation() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/infos',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let infos = await response.json()
        this.setState({ 'infos': infos.infos })
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
                <View >
                    {/* <a href="https://www.anninrobotoics.com/tutorials">https://www.anninrobotoics.com/tutorials</a> */}
                    <Text>Program: </Text>

                    <Button title="paypal ">paypal</Button>
                </View>
                <View style={styles.bigcContent}>
                    <Text>Information!</Text>
                </View>

                {this.state.infos.map(info => {
                    return <Text>{info}</Text>
                })}
                <View>
                    <Button title="Next Screen >>" onPress={this.doAction} />
                </View>
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('Home');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

