

import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class Vision extends Component {



    constructor(props) {
        super(props);
        this.state = {
            title: 'Vision  command  Screen',
            message: 'Vision  of Robot ARM',
            vision: {}
        }
    }

    render() {



        const styles = StyleSheet.create({
            container: {
                flex: 15,
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
                flex: 1,
                // flexDirection: 'column',
                backgroundColor: '#0f0',
            }

        });
        return (
            <View style={styles.container}>
                <Text>Vision Control</Text>
                <View style={styles.row}>
                    <Text style={styles.title}>Vision File location</Text>
                    <TextInput placeholder="C:\Users\pc\desktop\test.vis" value={this.state.message} onChange />
                </View>
                <View style={styles.row}>
                    <Text >  </Text>
                    <Text >Orig : X</Text>
                    <Text >Orig : Y</Text>
                    <Text >End : X</Text>
                    <Text >End : Y</Text>
                </View>

                <View style={styles.row}>
                    <Text >Calibration Pixels</Text>
                    <TextInput placeholder="0" value={this.state.message} />
                    <TextInput placeholder="0" value={this.state.message} />
                    <TextInput placeholder="0" value={this.state.message} />
                    <TextInput placeholder="0" value={this.state.message} />
                </View>
                <View style={styles.row}>
                    <Text >Calibration Robot MM</Text>
                    <TextInput placeholder="0" value={this.state.message} />
                    <TextInput placeholder="0" value={this.state.message} />
                    <TextInput placeholder="0" value={this.state.message} />
                    <TextInput placeholder="0" value={this.state.message} />
                </View>
                <View style={styles.row}>
                    <Text >Choose Vision Format</Text>
                </View>
                <View style={styles.row}>
                    <Text> option </Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="0" value={this.state.message} />
                    <Text >X found position (mm) </Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="0" value={this.state.message} />
                    <Text >Y found position (mm) </Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="0" value={this.state.message} />
                    <Text >R found position (mm)</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="0" value={this.state.message} />
                    <Text >X pixes returned from Camera/</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="0" value={this.state.message} />
                    <Text >Y pixes returned from Camera</Text>
                </View>
                <View style={styles.row}>
                    <Button title=" Test " ></Button>
                </View>
                <View style={styles.row}>
                    <Button title=" Save Vision Data " ></Button>
                </View>
                <View style={{ padding: 10 }}>
                    <Button title="Next Screen >>" onPress={this.doAction} />
                </View>
            </View >

        );
    }

    doAction = () => {
        this.props.navigation.navigate('Log');
    }


}
