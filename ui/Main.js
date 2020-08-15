
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { Header, Image } from 'react-native-elements'
import { NavigationContext } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


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
            information: "information ",
            row: "0"
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)
        this.runProgrammClicked = this.runProgrammClicked.bind(this)

    }


    render() {


        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
            viewInfo: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start'
            },
            viewProgramName: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            },
            viewControllerButton: {
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            },
            viewPlayButton: {
                flex: 5,
                justifyContent: 'flex-start'
            },
            viewFwdButton: {
                flex: 3,
            },
            viewRevButton: {
                flex: 3,
            },
            viewStopButton: {
                flex: 5,
            },
            viewProgramInfo: {
                flex: 1,
                flexDirection: 'row',

            },
            viewTeachingList: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            },
            viewFooter: {
                flex: 1,

            }
        });

        return (
            <View style={styles.container}>
                <Header><Text>header</Text></Header>
                <View  >
                    <View style={styles.viewInfo}>
                        <Text>Information : Home Robot Arm Powered by ARSC </Text>
                    </View>
                    <View style={styles.viewProgramName}>
                        <View style={{ flex: 3, }}>
                            <Text >Program: </Text>
                        </View>
                        <View style={{ flex: 4, }} >
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                        </View>
                        <View style={{ flex: 3, }} >
                            <Button onPress={this.changeProgramName} title='load Program' />
                        </View>

                    </View>
                    <View style={styles.viewControllerButton}>
                        <View style={styles.viewPlayButton}>
                            <TouchableOpacity onPress={() => { }}  >
                                <Image source={require('../assets/playicon.png')} style={
                                    { width: 64, height: 64 }
                                } />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewFwdButton}>
                            <Button title='fwd' ></Button>
                        </View>
                        <View style={styles.viewRevButton} >
                            <Button title='rev' ></Button>
                        </View>
                        <View style={styles.viewStopButton} >
                            <TouchableOpacity onPress={() => { }}  >
                                <Image source={require('../assets/stopicon.png')} style={
                                    { width: 64, height: 64 }
                                } />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.viewProgramInfo}>
                        <View >
                            <Text>  Infromation : {this.state.information}</Text>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: 'flex-end'

                        }}>
                            <View>
                                <Text >Current Row = </Text>
                            </View>
                            <View >
                                <TextInput placeholder="00" value={this.state.row} onChangeText={this.changeProgramName} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewTeachingList} >
                        <FlatList >aa</FlatList>
                    </View>
                    <View style={styles.viewFooter}>
                        <Button title="Next Screen >>" onPress={this.doAction} />
                    </View>
                </View>
            </View >
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

