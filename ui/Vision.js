

import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View } from 'react-native';


export default class Vision extends Component {



    constructor(props) {
        super(props);
        this.state = {
            title: 'Vision  command  Screen',
            message: 'Vision  of Robot ARM',
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
        });
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
        this.props.navigation.navigate('Log');
    }


}