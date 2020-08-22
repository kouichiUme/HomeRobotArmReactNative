
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class StorePositions extends Component {

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
                <Text>StoredPosition </Text>
                <Button title="Next Screen >>" onPress={this.doAction} />

                <View>
                    <Text>X</Text>
                    <Text>Y</Text>
                    <Text>Z</Text>
                    <Text>W</Text>
                    <Text>P</Text>
                    <Text>R</Text>
                    <Text></Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP1 (vision)</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP2</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP3</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP4</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP5</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP5</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP6</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP7</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP8</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP9</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP10</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP11</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP12</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP13</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP14</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP15</Text>
                </View>
                <View>
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <TextInput placeholder=" -90.0 " value={this.programName} onChangeText={this.changeProgramName} />
                    <Text>SP16</Text>
                </View>

                <Text>  Infromation now this is mock</Text>
                <Text >Current Row</Text>
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

