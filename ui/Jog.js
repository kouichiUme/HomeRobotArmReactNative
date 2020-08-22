
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
            jog: {
                "jointAngleLimit": {
                    "posi": "",
                    "neg": ""
                },
                "jointCurrentAngle": "",
                "jointAngleStep": "",
                "degreeToJog": "",

            }
        }
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)

        this.fetchJogInfo = this.fetchJogInfo.bind(this)
        this.jogPress = this.jogPress.bind(this)
    }

    async fetchJogInfo() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/jog',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let jog = await response.json()
        this.setState({ 'jog': jog })

    }

    async jogPress(e, jogParam) {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/' + jogParam,
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'
            })
        let jog = await response.json()
        this.setState({ 'jog': jog })
    }



    render() {
        this.fetchJogInfo()



        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
            jogLabel: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }
        });


        return (
            <View style={styles.container} >
                <Text>Jog</Text>
                <Text>Home Robot Arm Powered by ARSC </Text>
                <View style={styles.jogLabel}>
                    <Text>J1 : </Text>
                    <TextInput placeholder="20" value={String(this.state.jog.jointCurrentAngle.j1)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.jog.jointAngleStep.j1)} onChangeText={this.changeProgramName} />
                    <Button onPress={e => { this.jogPress(e, "j1jogneg") }} title=" - "></Button>
                    <Button onPress={e => { this.jogPress(e, "j1jogpos") }} title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>J2 : </Text>
                    <TextInput placeholder="20" value={String(this.state.jog.jointCurrentAngle.j2)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.jog.jointAngleStep.j2)} onChangeText={this.changeProgramName} />
                    <Button onPress={e => { this.jogPress(e, "j2jogneg") }} title=" - "></Button>
                    <Button onPress={e => { this.jogPress(e, "j2jogpos") }} title=" + " ></Button>
                </View>

                <View style={styles.jogLabel}>
                    <Text>J3 : </Text>
                    <TextInput placeholder="20" value={String(this.state.jog.jointCurrentAngle.j3)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.jog.jointAngleStep.j3)} onChangeText={this.changeProgramName} />
                    <Button onPress={e => { this.jogPress(e, "j3jogneg") }} title=" - "></Button>
                    <Button onPress={e => { this.jogPress(e, "j3jogpos") }} title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>J4 : </Text>
                    <TextInput placeholder="20" value={String(this.state.jog.jointCurrentAngle.j4)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.jog.jointAngleStep.j4)} onChangeText={this.changeProgramName} />
                    <Button onPress={e => { this.jogPress(e, "j4jogneg") }} title=" - "></Button>
                    <Button onPress={e => { this.jogPress(e, "j4jogpos") }} title=" + " ></Button>
                </View>

                <View style={styles.jogLabel}>
                    <Text>J5 : </Text>
                    <TextInput placeholder="20"  value={String(this.state.jog.jointCurrentAngle.j5)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.jog.jointAngleStep.j5) } onChangeText={this.changeProgramName} />
                    <Button onPress={e => { this.jogPress(e, "j5jogneg") }} title=" - "></Button>
                    <Button onPress={e => { this.jogPress(e, "j5jogpos") }} title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>J6 : </Text>
                    <TextInput placeholder="20" value={String(this.state.jog.jointCurrentAngle.j6)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.jog.jointAngleStep.j6) }onChangeText={this.changeProgramName} />
                    <Button onPress={e => { this.jogPress(e, "j6jogneg") }} title=" - "></Button>
                    <Button onPress={e => { this.jogPress(e, "j6jogpos") }} title=" + " ></Button>
                </View>


                <Text>{this.state.information}</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('JogXyz');
    }



}

