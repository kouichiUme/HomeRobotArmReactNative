import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class IoConditions extends Component {

    static contextType = NavigationContext;



    constructor(props) {
        super(props);

        this.state = {
            title: 'Ioconditions Screen',
            message: 'Ioconditions of Robot ARM',
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
                <Text>Ioconditions!</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />

                <View>
                    <Text>Do entry</Text>

                    <View>
                        <Button title="Do 0 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View>
                        <Button title="Do 0 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View>
                        <Button title="Do 1 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View>
                        <Button title="Do 1 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View>
                        <Button title="Do 2 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View>
                        <Button title="Do 2 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View>
                        <Button title="Do 3 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View>
                        <Button title="Do 3 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>

                    <View>
                        <Button title="Do 4 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View>
                        <Button title="Do 4 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>

                    <View>
                        <Button title="Do 5 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View>
                    <View>
                        <Button title="Do 5 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={this.programName} onChangeText={this.changeProgramName} />
                    </View> 
                </View>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('Registers');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

