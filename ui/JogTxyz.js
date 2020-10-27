
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
            transfer: { "millimetersToJog": {} }
        }
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)
        this.fetchInformation = this.fetchInformation.bind(this)

        this.jogPress = this.jogPress.bind(this)

    }

    /**
     * 
     */
    async fetchInformation() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/transfer',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let transfer = await response.json()
        this.setState({ 'transfer': transfer })
    }


    async jogPress(e, param) {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/' + param,
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'
            })
        let transfer = await response.json()
        this.setState({ 'transfer': transfer })


    }



    render() {

        this.fetchInformation()

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
                    
                    <TextInput placeholder="10" value={String(this.state.transfer.millimetersToJog.tx)} onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"txjogneg")}} title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"txjogpos")}} title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>Ty : </Text>
                    
                    <TextInput placeholder="10" value={String(this.state.transfer.millimetersToJog.ty)} onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"tyjogneg")}}  title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"tyjogpos")}}  title=" + " ></Button>
                </View>

                <View style={styles.jogLabel}>
                    <Text>Tz: </Text>
                    
                    <TextInput placeholder="10" value={String(this.state.transfer.millimetersToJog.tz)}onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"tzjogneg")}} title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"tzjogpos")}}  title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>Tw: </Text>
                    
                    <TextInput placeholder="10" value={String(this.state.transfer.millimetersToJog.tw)} onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"trxjogneg")}}  title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"trxjogpos")}}  title=" + " ></Button>
                </View>

                <View style={styles.jogLabel}>
                    <Text>Tp : </Text>
                    
                    <TextInput placeholder="10"value={String(this.state.transfer.millimetersToJog.tp)}onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"tryjogneg")}} title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"tryjogpos")}}  title=" + " ></Button>
                </View>
                <View style={styles.jogLabel}>
                    <Text>Tr: </Text>
                    
                    <TextInput placeholder="10" value={String(this.state.transfer.millimetersToJog.tr)} onChangeText={this.changeProgramName} />
                    <Button onPress={e=>{this.jogPress(e,"trzjogpos")}} title=" - "></Button>
                    <Button onPress={e=>{this.jogPress(e,"trzjogpos")}} title=" + " ></Button>
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

