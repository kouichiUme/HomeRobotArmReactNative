

import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View } from 'react-native';

export default class Jog extends Component {


    static navigationOptions = {
        title: 'Jog Screen',
        headerStyle: { backgroundColor: '#aa0000', },
        headerTintColor: 'white',
    };


    constructor(props) {
        super(props);
        this.state = {
            title: 'Jog  Screen',
            message: 'Jog of Robot ARM',
        }
    }

    render() {
        return (
            <View style={styles.base}>
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
        this.props.navigation.navigate('HOme');
    }


}