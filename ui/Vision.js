

import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class Vision extends Component {



    constructor(props) {
        super(props);
        this.state = {
            title: 'Vision  command  Screen',
            message: 'Vision  of Robot ARM',
            vision: {
                "fileLocation": "",
                "calibrationPixels": {
                    "origin": {
                        "X": 0,
                        "Y": 0
                    },
                    "end": {
                        "X": 0,
                        "Y": 0
                    }
                },
                "calibrationRobotMM": {
                    "origin": {
                        "X": 0,
                        "Y": 0
                    },
                    "end": {
                        "X": 0,
                        "Y": 0
                    }
                },
                "option": 0,
                "position": {
                    "X": 0,
                    "Y": 0,
                    "R": 0
                },
                "pixel": {
                    "X": 0,
                    "Y": 0
                }
            }
        }


        this.programName = " "
        this.doAction = this.doAction.bind(this)
        this.fetchStorePosition = this.fetchVision.bind(this)

        this.fetchVision()



    }



    async fetchVision() {

        let response = await fetch('http://192.168.11.8:8000/ArmRestApi/vision',
            {
                method: "GET",
                mode: 'cors',
                credentials: 'same-origin'

            })

        let vision = await response.json()
        this.setState({ 'vision': vision })
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
                    <TextInput placeholder="C:\Users\pc\desktop\test.vis" value={this.state.vision.fileLocation} onChange />
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
                    <TextInput placeholder="0" value={String(this.state.vision.calibrationPixels.origin.X)} />
                    <TextInput placeholder="0" value={String(this.state.vision.calibrationPixels.origin.Y)} />
                    <TextInput placeholder="0" value={String(this.state.vision.calibrationPixels.end.X)} />
                    <TextInput placeholder="0" value={String(this.state.vision.calibrationPixels.end.Y)} />
                </View>
                <View style={styles.row}>
                    <Text >Calibration Robot MM</Text>
                    <TextInput placeholder="0" value={String(this.state.vision.calibrationRobotMM.origin.X)} />
                    <TextInput placeholder="0" value={String(this.state.vision.calibrationRobotMM.origin.Y)} />
                    <TextInput placeholder="0" value={String(this.state.vision.calibrationRobotMM.end.X)} />
                    <TextInput placeholder="0" value={String(this.state.vision.calibrationRobotMM.end.Y)} />
                </View>
                <View style={styles.row}>
                    <Text >Choose Vision Format</Text>
                </View>
                <View style={styles.row}>
                    <Text>  {this.state.vision.option} </Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="0" value={String(this.state.vision.position.X)} />
                    <Text >X found position (mm) </Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="0" value={String(this.state.vision.position.Y)} />
                    <Text >Y found position (mm) </Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="0" value={String(this.state.vision.position.R)}/>
                    <Text >R found position (mm)</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="0" value={String(this.state.vision.pixel.X)}/>
                    <Text >X pixes returned from Camera/</Text>
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="0" value={String(this.state.vision.pixel.Y)}/>
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
