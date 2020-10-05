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
            doEntries: [{},{},{},{},{},{},{},{},{},{},{},{}]
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)
        this.fetchIcontrolInfomation = this.fetchIcontrolInfomation.bind(this)

        this.fetchIcontrolInfomation()
    }

    async fetchIcontrolInfomation() {


        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/do',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let doEntries = await response.json()
        this.setState({ 'doEntries': doEntries.do })

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
                flex: 1,
                // flexDirection: 'column',
                backgroundColor: '#0f0',
            }

        });


        return (
            <View style={styles.container}>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Do 0 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[0].value)} onChangeText={this.changeProgramName} />
                    </View>
                    <View style={styles.row}>
                        <Button title="Do 0 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[1].value)} onChangeText={this.changeProgramName} />
                    </View>
                    <View style={styles.row}>
                        <Button title="Do 1 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[2].value)} onChangeText={this.changeProgramName} />
                    </View>
                    <View style={styles.row}>
                        <Button title="Do 1 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[3].value)} onChangeText={this.changeProgramName} />
                    </View>
                    <View style={styles.row}>
                        <Button title="Do 2 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[4].value)} onChangeText={this.changeProgramName} />
                    </View>
                    <View style={styles.row}>
                        <Button title="Do 2 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[5].value)} onChangeText={this.changeProgramName} />
                    </View>
                    <View style={styles.row}>
                        <Button title="Do 3 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[6].value)} onChangeText={this.changeProgramName} />
                    </View>
                    <View style={styles.row}>
                        <Button title="Do 3 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[7].value)} onChangeText={this.changeProgramName} />
                    </View>

                    <View style={styles.row}>
                        <Button title="Do 4 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[8].value)} onChangeText={this.changeProgramName} />
                    </View>
                    <View style={styles.row}>
                        <Button title="Do 4 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[9].value)} onChangeText={this.changeProgramName} />
                    </View>

                    <View style={styles.row}>
                        <Button title="Do 5 on" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[10].value)} onChangeText={this.changeProgramName} />
                    </View>
                    <View style={styles.row}>
                        <Button title="Do 5 off" onPress={this.loadProgramClicked} />
                        <Text> = </Text>
                        <TextInput placeholder="Name" value={String(this.state.doEntries[11].value)} onChangeText={this.changeProgramName} />
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

