
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class JogTxyz extends Component {

    static contextType = NavigationContext;


    constructor(props) {
        super(props);

        this.state = {
            title: 'Jog Screen',
            message: 'Jog page of Robot ARM',
        }
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
            jogLabel: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }
        });


        return (
            <View style={styles.container} >
                <Text>JogTxyz</Text>
                <Text>Home Robot Arm Powered by ARSC </Text>
                <View style={styles.jogLabel}>
                    <Text>Tx: </Text>
                    <TextInput placeholder="20" value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={this.j1DegreeeToJog} onChangeText={this.changeProgramName} />
                    <Button title=" - "></Button>
                    <Button title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>Ty : </Text>
                    <TextInput placeholder="20" value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={this.j1DegreeeToJog} onChangeText={this.changeProgramName} />
                    <Button title=" - "></Button>
                    <Button title=" + " ></Button>
                </View>

                <View style={styles.jogLabel}>
                    <Text>Tz: </Text>
                    <TextInput placeholder="20" value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={this.j1DegreeeToJog} onChangeText={this.changeProgramName} />
                    <Button title=" - "></Button>
                    <Button title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>Tw: </Text>
                    <TextInput placeholder="20" value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={this.j1DegreeeToJog} onChangeText={this.changeProgramName} />
                    <Button title=" - "></Button>
                    <Button title=" + " ></Button>
                </View>

                <View style={styles.jogLabel}>
                    <Text>Tp : </Text>
                    <TextInput placeholder="20" value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={this.j1DegreeeToJog} onChangeText={this.changeProgramName} />
                    <Button title=" - "></Button>
                    <Button title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>Tr: </Text>
                    <TextInput placeholder="20" value={this.j1currentAngle} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={this.j1DegreeeToJog} onChangeText={this.changeProgramName} />
                    <Button title=" - "></Button>
                    <Button title=" + " ></Button>
                </View>




                <Text>  Infromation now this is mock</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('TeachingCommand');
    }



}

