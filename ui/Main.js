
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
            row: "0",
            url: "http://192.168.11.8:8000/ArmRestApi/",
            ipAddress: "192.168.11.8:8000"
        }
        this.changeUrl = this.changeUrl.bind(this)
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)

        this.fetchMainInfo = this.fetchMainInfo.bind(this)
        this.runProgram = this.runProgram.bind(this)
        this.fwdProgram = this.fwdProgram.bind(this)
        this.revProgram = this.revProgram.bind(this)
        this.stopProgram = this.stopProgram.bind(this)
        this.fetchMainInfo()

    }


    async runProgram() {

        let response = await fetch(this.state.url + 'runProgram',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })
        let runResult = await response.json()
        this.setState({ 'information': runResult.info })


    }


    async stopProgram() {
        let response = await fetch(this.state.url + 'stopProgram',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let stopResult = await response.json()
        this.setState({ 'information': stopResult.info })

    }
    async fwdProgram() {

        let response = await fetch(this.state.url + 'fwdProgram',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let fwdResult = await response.json()
        this.setState({ 'information': fwdResult.info })

    }
    async revProgram() {
        let response = await fetch(this.state.url + 'revProgram',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let revResult = await response.json()
        this.setState({ 'information': revResult.info })

    }

    async loadProgramClicked() {
        return "cliecked"
    }


    async fetchMainInfo() {

        let response = await fetch(this.state.url,
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let information = await response.json()
        this.setState({ 'information': information.user })
    }


    changeUrl(inputValue) {
        this.setState({ url: inputValue })
    }

    changeProgramName() {
        return ""
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('Jog');
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
                        <TextInput placeholder={this.state.url} value={this.state.url} onChangeText={this.changeUrl} />
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
                            <TouchableOpacity onPress={this.runProgram}  >
                                <Image source={require('../assets/playicon.png')} style={
                                    { width: 64, height: 64 }
                                } />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewFwdButton}>
                            <Button onPress={this.fwdProgram} title='fwd' ></Button>
                        </View>
                        <View style={styles.viewRevButton} >
                            <Button onPress={this.revProgram} title='rev' ></Button>
                        </View>
                        <View style={styles.viewStopButton} >
                            <TouchableOpacity onPress={this.stopProgram}  >
                                <Image source={require('../assets/stopicon.png')} style={
                                    { width: 64, height: 64 }
                                } />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.viewProgramInfo}>
                        <View >
                            <Text>  Infromation : {String(this.state.information)} </Text>
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


}

