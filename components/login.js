/* eslint-disable keyword-spacing */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

class Login extends Component {
  static navigationOptions = {
    headerTitle: () => {
      return (
        <View style={{ width: '100%' }}>
          <Text numberOfLines={2} style={{ color: Colors.accent, fontWeight: '700', fontSize: 14, textAlign: 'center', marginLeft: 15 }}>
            As-Salamu Alaykum Wa-Rahmatu illahi Wa-Barakatuhu Ahlan Wasahlam - Welcome
          </Text>
        </View>
      )
    },
  }
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      behavior: "position",
      isVisible: false, //state of modal default false  
    };
  }
  handlePress = async () => {
    let collection = {}
    collection.email = this.state.email,
      collection.password = this.state.password
    if (collection.email.length == 0) {
      Alert.alert(
        "Alert",
        "Username is required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else if (collection.password.length == 0) {
      Alert.alert(
        "Alert",
        "Password is required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      fetch("https://ebadge-api.mindstacksolutions.com/api/login", {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(collection),
      }).then(response => response.json()).then(data => {
        if (data.message == "Username or Password is incorrect") {
          Alert.alert(
            "Alert",
            "Username or Password is incorrect",
            [{ text: "OK" }],
            { cancelable: false }
          );
        } else {
          // this.props.navigation.navigate('Profile', {name: 'Lucy'})
          console.log(data);
          this.props.navigation.replace('Main', { params1: { name: data.userName, email: data.email, designation: data.designation, photo: data.userImage } });
        }
        console.log('Success:', data);
      }).catch((error) => {
        console.error('Error:', error);
      });
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (

      //Modal

      <View style={{ flex: 1, backgroundColor: "#fff", marginTop: 10 }}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView keyboardShouldPersistTaps="handled">
              <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.isVisible}
                onRequestClose={() => { this.setState({ isVisible: !this.state.isVisible }) }}>
                <View style={styles.modal}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginTop: 10 }}>
                      IQRA Rewards Intent
                    </Text>
                    <Text style={{ marginLeft: 100,   marginTop: 10 }} onPress={() => {
                    this.setState({ isVisible: !this.state.isVisible })
                  }} >
                      <Ionicons name="ios-close-circle" size={28} color={Colors.accent} />
                    </Text>
                  </View>
                  <View>
                  <Text style={{ fontSize:16,marginLeft:10 ,marginTop: 10 }}>A non-profit organization , aiming to elevate the family relationships by leveraging the knowledge capital persist inside the family for the betterment of the next generation.</Text>
                  <Text style={{ fontSize:16,marginLeft:10 ,marginTop: 10 }}>It gives the opportunity to excel in the Islamic and Academic journey respecting family value.</Text>
                  <Text style={{ fontSize:16,marginLeft:10 ,marginTop: 10 }}>For an individual it supports, encourages, motivates, and rewards for there Islamic and academic achievements in the form points which they avail through shopping in the IQRA Emporium.</Text>
                  </View>
                </View>
              </Modal>
            <View style={styles.curve}>
              <ImageBackground style={styles.backgroundImage} >
                <Image
                  name="save"
                  style={styles.img}
                  source={require("../assets/iqra-logo.png")}
                />
                <Text style={styles.subText}>
                  A journey to{" "}
                  <Text style={styles.titleText}>Sadaqah Jariyah,</Text> begins
                from Home!
              </Text>
              </ImageBackground>
            </View>
            <View style={styles.container}>
              <TextInput
                placeholder="      Username"
                style={styles.inputBoxEmail}
                onChangeText={(text) => this.setState({ email: text })}
              />

              <TextInput
                placeholder="      Password"
                secureTextEntry={true}
                style={styles.inputBoxEmail}
                onChangeText={(text) => this.setState({ password: text })}
              />

              <Text
                style={styles.forgot}
              >
                Forgot Password ?
              </Text>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.ButtonContainer} onPress={this.handlePress.bind(this)} >
                  <Text style={[styles.setFontSize, styles.setColorRed]}>LOGIN</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", alignContent: "center" }}>
                <Text style={styles.subText}>
                  New User? Submit your{" "}
                  <Text style={styles.terms} onPress={() => navigate(
                    'Register'
                  )}>
                    onboarding request
                  </Text>
                </Text>
                <Text style={styles.subText}>
                  Just want to learn more and contribute?
                </Text>
                <Text style={styles.subText}>Visit: iqrarewards.com </Text>
                <Text style={styles.subText}>
                  Email:{" "}
                  <Text
                    style={styles.terms}
                  >
                    iqrarewards@gmail.com
                  </Text>
                </Text>
                <View style={{ height: 50, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                  <Text style={{
                    color: Colors.accent, fontWeight: 'bold', fontSize: 18
                  }}>IQRA Rewards {" "}
                    <Text style={{ fontWeight: '300' }} onPress={() => { this.setState({ isVisible: true }) }} >
                      intent  <Ionicons name="ios-information-circle" size={24} color="black" />
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <View style={{ width: '100%', marginTop: 20 }}>
          <View style={{ backgroundColor: Colors.primary, height: 70 }}>
            <Text numberOfLines={3} style={{ color: Colors.accent, fontWeight: 'bold', fontSize: 16, margin: 5, textAlign: 'center' }}>
              Hadith: <Text style={{ color: Colors.accent, fontWeight: '700', fontSize: 14, textAlign: 'center' }}>
                Messenger of Allah (PBUH) said: "Whoever takes a path upon which to obtain
                knowledge, Allah makes the path to Paradise easy for him."
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  curve: {
    alignSelf: "stretch",
    height: 140,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
    // backgroundColor: '#ee4124',
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    // marginTop: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,

    justifyContent: "center",
  },
  img: {
    height: 100,
    width: 100,
  },
  forgot: {
    width: 300,
    paddingLeft: 175,
    paddingBottom: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "#EEF5D9",
    height: 300,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 180,
    borderRadius: 20,
    elevation: 30,
    alignItems: 'center',
    marginLeft: 20
  },
  terms: {
    paddingBottom: 10,
    color: "#3b5b7e",
  },
  inputEmail: {
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  inputPassword: {
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 25,
    color: "#3b5b7e",
    paddingHorizontal: 10,
  },
  subText: {
    marginTop: 5,
    paddingHorizontal: 5,
  },
  titleText: {
    fontWeight: "bold",
  },
  ButtonContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    height: 40,
    width: 350,
    borderRadius: 10,
  },
  setFontSize: {
    fontWeight: "bold",
  },
  inputBoxEmail: {
    height: 40,
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    width: 300,
    backgroundColor: "#eee",
    borderRadius: 25,
  },
  setColorRed: {
    color: 'white',
  },
});

export default Login;