

import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class TeachingCommand extends Component {



    constructor(props) {
        super(props);
        this.state = {
            title: 'teaching command  Screen',
            message: 'TeachingCommand of Robot ARM',
        }
    }

    render() {



        const styles = StyleSheet.create({
            container: {
                flex: 18,
                backgroundColor: '#fff',
                alignItems: 'center',
                // justifyContent: 'center',
            },
            dualColumn: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            },
            row: {
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#0f0',
                justifyContent: 'flex-start',

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
                    <Text style={styles.title}>move j</Text>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Text style={styles.message}>Stored Position</Text>
                        <TextInput style={styles.message} value={this.message} placeholder="1" />
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Teach New Position" onPress={this.doAction} />

                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Modify Position" />
                    </View>
                </View>

                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Delete" />
                    </View>
                </View>

                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Call Program" />
                        <TextInput style={styles.message} value={this.state.message} />
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Return" />
                    </View>
                </View>
                {/* <View style={styles.col}>
                    <View style={styles.row}>
                    </View>
                </View> */}
                {/* <View style={styles.col}>
                    <View style={styles.row}>
                        
                    </View>
                </View> */}
                {/* <View style={styles.col}>
                    <View style={styles.row}>

                        <Button title="Wati Input Off" />
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>
                </View> */}
                {/* <View style={styles.col}>
                    <View style={styles.row}>
                       
                    </View>
                </View> */}
                {/* <View style={styles.col}>
                    <View style={styles.row}>

                    </View>
                </View> */}

                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="If On Jump" />
                        <Text style={styles.message}> 10 </Text>
                        <Text style={styles.message}> 10 </Text>
                        <Button title="Wait Time" />
                        <Text style={styles.message}>40</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="If Off Jump" />
                        <Text style={styles.message}>10</Text>
                        <Text style={styles.message}>10</Text>
                        <Button title="Wati Input On" />
                        <Text style={styles.message}>10</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>

                        <Button title="Servo" />
                        <Text style={styles.message}>10</Text>
                        <Text style={styles.message}>10</Text>

                        <Button title="Wati Input Off" />
                        <Text style={styles.message}>10</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Register" />
                        <Text style={styles.message}>10</Text>
                        <Text style={styles.message}>10</Text>
                        <Button title="Set Output On" />
                        <Text style={styles.message}>10</Text>

                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>

                        <Button title="If Register Jump" />
                        <Text style={styles.message}>R1</Text>
                        <Text style={styles.message}>1</Text>
                        <Text style={styles.message}>tab1</Text>
                        <Button title="Set Output Off" />
                        <Text style={styles.message}>1</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Stored Position" />
                        <Text style={styles.message}>SP1</Text>
                        <Text style={styles.message}>element num</Text>
                        <Text style={styles.message}></Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>

                        <Button title="Create Tab" />
                        <Text style={styles.message}>1</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>

                        <Button title="Jump To Tab" />
                        <Text style={styles.message}>1</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <Button title="Get Vision" />
                        
                        <Button title="Auto Calibrate CMD" />
                    </View>
                </View>

                <View style={styles.col}>
                    <View style={styles.row}>

                        <Button title="Next Screen >>" onPress={this.doAction} />
                    </View>
                </View>
            </View >
        );
    }

    doAction = () => {
        this.props.navigation.navigate('AutoCalibration');
    }


}