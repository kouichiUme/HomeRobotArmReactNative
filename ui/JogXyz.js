
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class JogXyz extends Component {

    static contextType = NavigationContext;


    constructor(props) {
        super(props);

        this.state = {
            title: 'Jog Screen',
            message: 'Jog page of Robot ARM',
            move: {
                "currentPosition": {},
                "millimitersToJog": {},
                "track": {}
            }
        }
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)
        this.jogPress = this.jogPress.bind(this)
        this.fetchJogInfo = this.fetchJogInfo.bind(this)
    }


    async fetchJogInfo() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/move',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let move = await response.json()
        this.setState({ 'move': move })

    }


    async jogPress(e, jogParam) {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/' + jogParam,
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'
            })
        let move = await response.json()
        this.setState({ 'move': move })
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
                    <Text>X : </Text>
                    <TextInput placeholder="20" value={String(this.state.move.currentPosition.x)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.move.millimitersToJog.x)} onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"xjogneg")}} title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"xjogpos")}} title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>Y : </Text>
                    <TextInput placeholder="20" value={String(this.state.move.currentPosition.y)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.move.millimitersToJog.y)} onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"yjogneg")}}  title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"yjogpos")}}  title=" + " ></Button>
                </View>

                <View style={styles.jogLabel}>
                    <Text>Z : </Text>
                    <TextInput placeholder="20" value={String(this.state.move.currentPosition.z)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.move.millimitersToJog.z)} onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"zjogneg")}}  title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"zjogpos")}}  title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>W : </Text>
                    <TextInput placeholder="20" value={String(this.state.move.currentPosition.w)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.move.millimitersToJog.w)} onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"rxjogneg")}}  title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"rxjogpos")}}   title=" + " ></Button>
                </View>

                <View style={styles.jogLabel}>
                    <Text>P : </Text>
                    <TextInput placeholder="20" value={String(this.state.move.currentPosition.p)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.move.millimitersToJog.p)} onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"ryjogneg")}}   title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"ryjogpos")}}  title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>R : </Text>
                    <TextInput placeholder="20" value={String(this.state.move.currentPosition.r)} onChangeText={this.changeProgramName} />
                    <TextInput placeholder="10" value={String(this.state.move.millimitersToJog.r)} onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"rzjogneg")}} title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"rzjogpos")}}  title=" + " ></Button>
                </View>


                {/* track  */}
                <Text>  Infromation now this is mock</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('JogTxyz');
    }



}

