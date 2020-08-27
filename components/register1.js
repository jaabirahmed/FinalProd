import React, { Component, useState } from 'react';
import {
    Button, StyleSheet, Keyboard, Text, View, TextInput,
    Image, TouchableOpacity, ScrollView, Picker, Modal, CheckBox
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import islamicMoment from 'moment-hijri';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImgPicker from './ImageSelector';

class Register extends Component {
    static navigationOptions = {
        headerTitle: () => {
            return (
                <View style={{ width: '100%' }}>
                    <Text style={{ color: Colors.accent, fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>
                        Bismillah al-rahman al-rahim
                </Text >
                    <Text style={{ color: Colors.accent,fontWeight:'700', fontSize: 14, textAlign: 'center' }}>In the name of Allah, the Most Gracious, the Most Merciful</Text>
                </View>
            )
        },
    };
    constructor() {
        super()
        this.state = {
            data: ['Male', 'Female'],
            checked: 0,
            PickerSelectedVal: '',
            PickerSelectedVal1: '',
            visibility: false,
            DateDisplay: "",
            isVisible: false,
            isVisible1: false,
            isSelected: false,
            image: null,
        }
    }

    handleConfirm = (date) => {
        this.setState({ DateDisplay: date.toUTCString() })
        this.setState({ visibility: false })
    }

    onPressCancel = () => {
        this.setState({ visibility: false })
        this.setState({ DateDisplay: "" })
    }

    onPressButton = () => {
        this.setState({ DateDisplay: "" })
        this.setState({ visibility: true })
    }
    
    render() {
        let { image } = this.state;
        const { navigate } = this.props.navigation;
        Moment.locale('en');
        return (

            <View style={styles.container}>
                <ScrollView >
                    {/* <View style={{ shadowColor: 'black', backgroundColor: 'white', elevation: 20, padding: 30, marginTop: 30, flexDirection: 'row' }}>

                    </View> */}

                    <View style={{ shadowColor: 'black', backgroundColor: 'white', paddingLeft: 25, paddingTop: 10 }}>
                        <Modal
                            animationType={"slide"}
                            transparent={false}
                            visible={this.state.isVisible}
                            onRequestClose={() => { this.setState({ isVisible: !this.state.isVisible }) }}>
                            <View style={styles.modal}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginTop: 10 }}>
                                        IQRA Photo Specication
                                    </Text>
                                    <Text style={{ marginLeft: 100, marginTop: 10 }} onPress={() => {
                                        this.setState({ isVisible: !this.state.isVisible })
                                    }} >
                                        <Ionicons name="ios-close-circle" size={28} color={Colors.accent} />
                                    </Text>
                                </View>
                                <View>
                                    <View style={[styles.curve1, { alignItems: 'center' }]}>
                                        <Image name="save" style={styles.img1} source={require('../assets/user.png')} />
                                    </View>
                                    <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 10 }}>Take the best Photo and upload it</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 10 }}>Make sure the background is light color</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 10 }}>Have a smile as its Sunnah!</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 10 }}>Only the face and some neck portion to be visible</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 10 }}>The image must be in JPEG, IMG, GIF le format only</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 10 }}>The image must be less than or equal to 240 kB (kilobytes)</Text>
                                </View>
                            </View>
                        </Modal>
                        <Modal
                            animationType={"slide"}
                            transparent={false}
                            visible={this.state.isVisible1}
                            onRequestClose={() => { this.setState({ isVisible1: !this.state.isVisible1 }) }}>
                            <View style={styles.modal}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginTop: 20 }}>
                                        Member Acknowledgment
                                    </Text>
                                    <Text style={{ marginLeft: 80, marginTop: 20 }} onPress={() => {
                                        this.setState({ isVisible1: !this.state.isVisible1 })
                                    }} >
                                        <Ionicons name="ios-close-circle" size={28} color={Colors.accent} />
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 10 }}>I will participate in most of the events and activities which will be organized by IQRA Rewards</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 10 }}>I would love to contribute and participate in any of the volunteer assignments to the best of my ability</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 10 }}>I acknowledge, all the infrmation whcih i will be submitting is with all HONESTY adn to seek ALLAH ‘s pleasure and improve my KNOWLEDGE capital</Text>
                                </View>
                            </View>
                        </Modal>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={styles.inputView}>
                                <TextInput
                                    placeholder="Username"
                                    style={styles.inputBoxEmail}
                                    placeholderTextColor="#000000a8"
                                />
                                <TextInput
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    style={styles.inputBoxEmail}
                                    placeholderTextColor="#000000a8"
                                />
                            </View>
                            <View style={styles.curve}>
                                <ImgPicker />
                                <Text style={{ textAlign: 'center' }} onPress={() => { this.setState({ isVisible: true }) }}><Ionicons name="ios-information-circle" size={24} color="black" /></Text>
                            </View>
                        </View>
                        <TextInput
                            placeholder="FullName"
                            style={[styles.inputBoxEmail1, { marginTop: 20 }]}
                            placeholderTextColor="#000000a8"
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
                            <TextInput
                                placeholder="Email ID"
                                style={{ fontSize: 16, width: 165, paddingVertical: 4, borderBottomWidth: 1, borderColor: '#DADBDD', }}
                                placeholderTextColor="#000000a8"
                            />
                            <TextInput
                                placeholder="Mobile"
                                autoCorrect={false}
                                keyboardType="number-pad" maxLength={10}
                                style={{ fontSize: 16, width: 165, marginLeft: 20, paddingVertical: 4, borderBottomWidth: 1, borderColor: '#DADBDD' }}
                                placeholderTextColor="#000000a8"
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
                            <TextInput
                                placeholder="Address"
                                style={{ fontSize: 16, width: 165, paddingVertical: 4, borderBottomWidth: 1, borderColor: '#DADBDD' }}
                                placeholderTextColor="#000000a8"
                            />
                            <TextInput
                                placeholder="Hobbies"
                                style={{ fontSize: 16, width: 165, marginLeft: 20, paddingVertical: 4, borderBottomWidth: 1, borderColor: '#DADBDD', }}
                                placeholderTextColor="#000000a8"
                            />
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
                                <Text style={{ fontSize: 16, paddingTop: 10, fontWeight: 'bold' }}>GENDER :</Text>
                                <Text style={{ fontSize: 16, paddingTop: 10, paddingLeft: 120, fontWeight: 'bold' }}>DOB (Islamic Calender) :</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                {this.state.data.map((data, key) => {
                                    return (
                                        <View >
                                            {this.state.checked == key ?
                                                <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 10 }}>
                                                    <Image style={{ width: 20, height: 20, padding: 5 }} source={require('../assets/rb1.png')} />
                                                    <Text key={data} style={{ marginLeft: 5 }}>{data}</Text>
                                                </TouchableOpacity>
                                                : <TouchableOpacity onPress={() => { this, this.setState({ checked: key }) }} style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 10 }}>
                                                    <Image style={{ width: 20, height: 20, padding: 5 }} source={require('../assets/rb.png')} />
                                                    <Text key={data} style={{ marginLeft: 5 }}>{data}</Text>
                                                </TouchableOpacity>
                                            }
                                        </View>
                                    )
                                })}
                                <Text
                                style={{ fontSize: 16,marginLeft:45 ,width: 140, paddingVertical: 4, paddingTop: 10, color: '#000000a8' }}
                            >{this.state.DateDisplay == "" ? "Select": islamicMoment(this.state.DateDisplay).format('iYYYY/iM/iD')}</Text>
                        
                            </View>
                            </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
                            <Text style={{ fontSize: 16, paddingTop: 10, fontWeight: 'bold' }}>Select your Family :</Text>
                            <Text style={{ fontSize: 16, paddingTop: 10, fontWeight: 'bold', paddingLeft: 50 }}>Team :</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Picker selectedValue={this.state.PickerSelectedVal}
                                onValueChange={(itemValue, itemIndex) => { this, this.setState({ PickerSelectedVal: itemValue }) }}
                                style={{ width: 165, }}>
                                <Picker.Item label="Select" value="" />
                                <Picker.Item label="New to IQRA Family" value="New to IQRA Family" />
                                <Picker.Item label="AR-Rahman" value="AR-Rahman" />
                                <Picker.Item label="AR-Raheem" value="AR-Raheem" />
                            </Picker>
                            <Picker selectedValue={this.state.PickerSelectedVal2}
                                onValueChange={(itemValue, itemIndex) => { this, this.setState({ PickerSelectedVal2: itemValue }) }}
                                style={{ width: 165, marginLeft: 20, borderWidth: 1 }}   >
                                <Picker.Item label="Select" value="" />
                                <Picker.Item label="Akrams" value="Akrams" />
                                <Picker.Item label="Zayos" value="Zayos" />
                            </Picker>
                        </View>

                        <View>
                            <DateTimePickerModal
                                isVisible={this.state.visibility}
                                mode="date"
                                onConfirm={this.handleConfirm}
                                onCancel={this.onPressCancel}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10 }}>
                            <Text style={{ fontSize: 16, paddingTop: 10, fontWeight: 'bold' }}>Date of Birth:</Text>
                            <Text style={{ fontSize: 16, paddingTop: 10, paddingLeft: 100, fontWeight: 'bold' }}>Qualification :</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Text
                                style={{ fontSize: 16, width: 140, paddingVertical: 4, paddingTop: 15, color: '#000000a8' }}
                            >{this.state.DateDisplay == "" ? "Select": Moment(this.state.DateDisplay).format('MM/DD/YYYY')}</Text>
                            <Text style={{ paddingTop: 15 }}
                                onPress={this.onPressButton}>
                                <Ionicons name="md-calendar" size={24} color="black" />
                            </Text>
                            <Picker selectedValue={this.state.PickerSelectedVal1}
                                onValueChange={(itemValue, itemIndex) => { this, this.setState({ PickerSelectedVal1: itemValue }) }}
                                style={{ width: 165, marginLeft: 30 }}>
                                <Picker.Item label="Select" value="" />
                                <Picker.Item label="N/A" value="N/A" />
                                <Picker.Item label="Nursery" value="Nursery" />
                                <Picker.Item label="1 std" value="1 std" />
                                <Picker.Item label="2 std" value="2 std" />
                            </Picker>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={this.state.isSelected}
                                onValueChange={() => {
                                    this.setState({ isSelected: !this.state.isSelected })
                                }}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>I Acknowledge Terms and Conditions</Text>
                            <Text style={{ marginTop: 5 }} onPress={() => { this.setState({ isVisible1: true }) }}><Ionicons name="ios-information-circle" size={24} color="black" /></Text>


                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.ButtonContainer} >
                                <Text style={[styles.setFontSize, styles.setColorRed]}>Register</Text>
                            </TouchableOpacity>
                            <Text style={styles.subText}>
                                Contact:{" "}
                                <Text
                                    style={styles.terms}
                                >
                                    iqrarewards@gmail.com
                                 </Text>
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 20 }}>
                        <View style={{ backgroundColor: Colors.primary, height: 70 }}>
                            <Text numberOfLines={3} style={{ color: Colors.accent, fontWeight: 'bold', fontSize: 16, margin: 5, textAlign: 'center' }}>
                                Hadith: 
                                <Text style={{ color: Colors.accent, fontWeight: '700', fontSize: 14, textAlign: 'center' }}>
                                    The Prophet said: “The best of charity is when a Muslim man gains knowledge, then he teaches it to his Muslim brother”
                                </Text>
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
    
 takeImageHandler = async () => {
      const hasPermission = await getPermissionAsync();
      if (!hasPermission) {
          return;
      }
      let result=ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };
  
const styles = StyleSheet.create({
    inputView: {
    },
    main: {
        flexDirection: 'row',
    },
    curve: {
        paddingTop: 10,
        paddingLeft: 50,
    },
    curve1: {
        paddingTop: 10,
    },
    backgroundImage: {

    },
    img: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor:'black'
    },
    img1: {
        height: 120,
        width: 120,
    },
    inputBoxEmail: {
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderColor: '#DADBDD',
        width: 200,
        fontSize: 16
    },
    inputBoxEmail1: {
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderColor: '#DADBDD',
        width: 350,
        fontSize: 16
    },
    inputBoxEmail2: {
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderColor: '#DADBDD',
        width: 300,
        fontSize: 16
    },
    modal: {
        backgroundColor: "#EEF5D9",
        height: 400,
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 120,
        borderRadius: 20,
        elevation: 30,
        alignItems: 'center',
        marginLeft: 20
    },
    ButtonContainer: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.accent,
        height: 40,
        width: 350,
        marginRight: 30,
        borderRadius: 10,
        marginTop: 10
    },
    setFontSize: {
        fontWeight: 'bold'
    },
    setColorRed: {
        color: '#fff'
    },
    terms: {
        paddingBottom: 10,
        color: "#3b5b7e",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        marginTop: 10
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        fontSize: 16
    },
    subText: {
        marginTop: 5,
        paddingHorizontal: 5,
    },

});

export default Register;