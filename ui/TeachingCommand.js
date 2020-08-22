

import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View } from 'react-native';


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
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
            dualColumn: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }

        });
        return (
            <View style={styles.base}>
                <View style={styles.body}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.message}>{this.state.message}</Text>
                    <View >
                        <Button title="Teach New Position" onPress={this.doAction}/>
                    </View>
                    <View >
                        <Button title="Modify Position" />
                    </View>

                    <View >
                        <Button title="Delete" />
                    </View>

                    <View >
                        <Button title="Call Program" />
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>

                    <View >
                        <Button title="Return" />
                    </View>
                    <View >
                        <Button title="Auto Calibrate CMD" />
                    </View>
                    <View >
                        <Button title="Wait Time" />
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>
                    <View >
                        <Button title="Wati Input Off" />
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>

                    <View >
                        <Button title="Set Output On" />
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>
                    <View >
                        <Button title="Set Output Off" />
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>

                    <View >
                        <Button title="If On Jump" />
                        <Text style={styles.message}>{this.state.message}</Text>
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>
                    <View >
                        <Button title="If Off Jump" />
                        <Text style={styles.message}>{this.state.message}</Text>
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>
                    <View >
                        <Button title="Servo" />
                        <Text style={styles.message}>{this.state.message}</Text>
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>
                    <View >
                        <Button title="Register" />
                        <Text style={styles.message}>{this.state.message}</Text>
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>
                    <View >
                        <Button title="If Register Jump" />
                        <Text style={styles.message}>{this.state.message}</Text>
                        <Text style={styles.message}>{this.state.message}</Text>
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>
                    <View >
                        <Button title="Stored Position" />
                        <Text style={styles.message}>{this.state.message}</Text>
                        <Text style={styles.message}>{this.state.message}</Text>
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>

                    <View >
                        <Button title="Create Tab" />
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>
                    
                    <View >
                        <Button title="Jump To Tab" />
                        <Text style={styles.message}>{this.state.message}</Text>
                    </View>
                    <View >
                        <Button title="Get Vision" />
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.message}>{this.state.message}</Text>
                    <View style={{ padding: 10 }}>
                        <Button title="Teach New Position" />
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.message}>{this.state.message}</Text>
                    <View style={{ padding: 10 }}>
                        <Button title="Next Screen >>" onPress={this.doAction} />
                    </View>
                </View>
            </View>
        );
    }

    doAction = () => {
        this.props.navigation.navigate('AutoCalibration');
    }


}