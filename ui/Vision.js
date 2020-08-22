

import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


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
                // justifyContent: 'center',
            },
        });
        return (
            <View style={styles.base}>
                <Text>Vision Control</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
                <View style={styles.body}>
                    <Text style={styles.title}>Vision File location</Text>
                    <TextInput placeholder="C:\Users\pc\desktop\test.vis" value={this.state.message} onChange/>
                </View>
                <View>
                    <Text >  </Text>
                    <Text >Orig : X</Text>
                    <Text >Orig : Y</Text>
                    <Text >End : X</Text>
                    <Text >End : Y</Text>
                </View>

                <View>
                    <Text >Calibration Pixels</Text>
                    <TextInput placeholder="0" value={this.state.message}  />
                    <TextInput placeholder="0" value={this.state.message}  />
                    <TextInput placeholder="0" value={this.state.message}  />
                    <TextInput placeholder="0" value={this.state.message}  />
                </View>
                <View>
                    <Text >Calibration Robot MM</Text>
                    <TextInput placeholder="0" value={this.state.message}  />
                    <TextInput placeholder="0" value={this.state.message}  />
                    <TextInput placeholder="0" value={this.state.message}  />
                    <TextInput placeholder="0" value={this.state.message}  />
                </View>
                <View>
                    <Text >Choose Vision Format</Text>
                    <Text> option </Text>
                    <View>
                        <View >
                            <TextInput placeholder="0" value={this.state.message} />
                            <Text >X found position (mm) </Text>
                        </View>
                        <View >
                            <TextInput placeholder="0" value={this.state.message} />
                            <Text >Y found position (mm) </Text>
                        </View>
                        <View >
                            <TextInput placeholder="0" value={this.state.message} />
                            <Text >R found position (mm)</Text>
                        </View>
                        <View >
                            <TextInput placeholder="0" value={this.state.message} />
                            <Text >X pixes returned from Camera/</Text>
                        </View>
                        <View >
                            <TextInput placeholder="0" value={this.state.message} />
                            <Text >Y pixes returned from Camera</Text>
                        </View>
                    </View>
                    <Button title=" Test " ></Button>
                    <Button title=" Save Vision Data " ></Button>
                </View>

                <View style={{ padding: 10 }}>
                    <Button title="Next Screen >>" onPress={this.doAction} />
                </View>
            </View>

        );
    }

    doAction = () => {
        this.props.navigation.navigate('Log');
    }


}
