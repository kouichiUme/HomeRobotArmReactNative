
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class StorePositions extends Component {

    static contextType = NavigationContext;

    static navigationOptions = {
        title: 'Registers Screen',
        headerStyle: { backgroundColor: '#aa0000', },
        headerTintColor: 'white',
    }


    constructor(props) {
        super(props);

        this.state = {
            title: 'Registers Screen',
            message: 'Registers page of Robot ARM',
            "storedPositions": [{
                "num": 0,
                "storedPosition": {"x":0}
            }]
        };

        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = " "
        this.doAction = this.doAction.bind(this)
        this.fetchStorePosition = this.fetchStorePosition.bind(this)

        this.fetchStorePosition()
    }

    async fetchStorePosition() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/storedPosition',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let storedPositionsMessage = await response.json()
        this.setState({ 'storedPositions': storedPositionsMessage.storedPositions })
    }


    render() {


        const styles = StyleSheet.create({
            container: {
                flex: 18,
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
                flex: 5,
                // flexDirection: 'column',
                backgroundColor: '#0f0',
            }

        });


        return (
            <View style={styles.container}>
                <Text>StoredPosition </Text>
                <View style={styles.row}>
                    <Text>X</Text>
                    <Text>Y</Text>
                    <Text>Z</Text>
                    <Text>W</Text>
                    <Text>P</Text>
                    <Text>R</Text>
                    <Text></Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.state.storedPositions[0].storedPosition.x} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP1 (vision)</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP2</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP3</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP4</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP5</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP5</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP6</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP7</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP8</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP9</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP10</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP11</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP12</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP13</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP14</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP15</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP16</Text>
                </View>

                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('Vision');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

