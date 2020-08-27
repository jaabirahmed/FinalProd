import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';


const Register = props => {
    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={{ shadowColor: 'black', backgroundColor: 'white', elevation: 20, padding: 30, marginTop: 30, flexDirection: 'row' }}>
                    <View style={styles.curve}>
                        <Image name="save" style={styles.img} source={require('../assets/iqra-logo.png')} />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder="Username"
                            style={styles.inputBoxEmail}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={true}
                            style={styles.inputBoxEmail}
                        />
                    </View>
                </View>

                <View style={{ shadowColor: 'black', backgroundColor: 'white', elevation: 20, padding: 30, marginTop: 30 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text>Your Personal Info</Text>
                    </View>
                    <TextInput
                        placeholder="FullName"
                        style={styles.inputBoxEmail}
                    />
                    <TextInput
                        placeholder="Gender"
                        secureTextEntry={true}
                        style={styles.inputBoxEmail}
                    />
                    <TextInput
                        placeholder="Select Your Family"
                        secureTextEntry={true}
                        style={styles.inputBoxEmail}
                    />
                    <TextInput
                        placeholder="Email ID"
                        secureTextEntry={true}
                        style={styles.inputBoxEmail}
                    />
                    <TextInput
                        placeholder="Mobile"
                        secureTextEntry={true}
                        style={styles.inputBoxEmail}
                    />
                    <TextInput
                        placeholder="Date of Birth"
                        secureTextEntry={true}
                        style={styles.inputBoxEmail}
                    />
                </View>
                <View style={{alignItems:'center',marginTop:10}}>
                    <TouchableOpacity style={styles.ButtonContainer} >
                        <Text style={[styles.setFontSize, styles.setColorRed]}>Register</Text>
                    </TouchableOpacity>
                </View>
                {/* <Text style={styles.forgot}>Forgot Password ?</Text>
                    <TouchableOpacity style={styles.ButtonContainer} >
                        <Text style={[styles.setFontSize, styles.setColorRed]}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', alignContent: 'center' }}>
                        <Text style={styles.subText}> New User? Submit your <Text style={styles.terms} >onboarding request</Text></Text>
                        <Text style={styles.subText}>Just want to learn more and contribute?</Text>
                        <Text style={styles.subText}>Visit: iqrarewards.com </Text>
                        <Text style={styles.subText}> or </Text>
                        <Text style={styles.subText}>Email: <Text style={styles.terms} >iqrarewards@gmail.com</Text></Text>
                    </View> */}
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    inputView: {
        paddingLeft: 50,
    },
    main: {
        flexDirection: 'row',
    },
    curve: {
        paddingTop: 10,
    },
    backgroundImage: {

    },
    img: {
        height: 60,
        width: 60,
    },
    inputBoxEmail: {
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderColor: '#DADBDD',
        width: 200,
    },
    ButtonContainer: {
        alignItems: 'flex-end',

        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3b5b7e',
        height: 40,
        width: 300,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10
    },
    setFontSize: {
        fontWeight: 'bold'
    },
    setColorRed: {
        color: '#fff'
    }
});

export default Register;