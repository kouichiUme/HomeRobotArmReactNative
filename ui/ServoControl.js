import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class ServoControl extends Component {

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
                <Text>ServoControl</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
                <View>
                    <View>
                        <Button title="Servo 0 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View>
                        <Button title="Servo 0 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>

                    <View>
                        <Button title="Servo 1 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>

                    <View>
                        <Button title="Servo 1 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>


                    <View>
                        <Button title="Servo 2 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>

                    <View>
                        <Button title="Servo 2 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>

                    <View>
                        <Button title="Servo 3 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>

                    <View>
                        <Button title="Servo 3 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                </View>
                <Text>Infromation now this is mock </Text>
                <Text >Current Row</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('IoConditions');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

