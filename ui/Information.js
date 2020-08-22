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
                <Text>Information!</Text>

                {/* <a href="https://www.anninrobotoics.com/tutorials">https://www.anninrobotoics.com/tutorials</a> */}
                <Text>Program: </Text>
                <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                
                <Text>  Infromation now this is mock</Text>
                <Button title="paypal ">paypal</Button>

                <Button title="Next Screen >>" onPress={this.doAction} />
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

