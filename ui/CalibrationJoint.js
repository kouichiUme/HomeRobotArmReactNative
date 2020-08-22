import React, { Component } from 'react';
import { StyleSheet, StatusBar, Alert, Button, Text, View, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';


export default class CalibrationJoint extends Component {

    static contextType = NavigationContext;



    constructor(props) {
        super(props);

        this.state = {
            title: 'Log Screen',
            message: 'Main page of Robot ARM',
        }
        this.changeProgramName = this.changeProgramName.bind(this)
        this.programName = "start programname"
        this.doAction = this.doAction.bind(this)
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
            <View style={styles.container}>
                
                <Button title="Update Calibration Values" onPress={this.doAction} />
                <Button title="Next Screen >>" onPress={this.doAction} />
                <Text>CalibrationParameters!</Text>
                <View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J1 Negative Angle Limit </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J1 Positive Angle Limit </Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J1 Step Limit </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J2 Negative Angle Limit </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J2 Positive Angle Limit </Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J2 Step Limit </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J3 Negative Angle Limit </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J3 Positive Angle Limit </Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J3 Step Limit </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J4 Negative Angle Limit </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J4 Positive Angle Limit </Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J4 Step Limit </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J5 Negative Angle Limit </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J5 Positive Angle Limit </Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J5 Step Limit </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J6 Negative Angle Limit </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J6 Positive Angle Limit </Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>J6 Step Limit </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>Track Length </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <TextInput placeholder="Program Name" value={this.programName} onChangeText={this.changeProgramName} />
                            <Text>Track Step Limit </Text>
                        </View>
                    </View>
                </View>


                <Text>  Infromation now this is mock</Text>
                <Text >Current Row</Text>
                <Button title="Next Screen >>" onPress={this.doAction} />
            </View>
        );
    }


    doAction = () => {
        // We can access navigation object via context
        const navigation = this.context;
        navigation.navigate('CalibrationDistance');
    }

    loadProgramClicked() {
        return "cliecked"
    }


    changeProgramName() {
        return ""
    }


}

