/* eslint-disable keyword-spacing */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, StyleSheet, Text, Vibration, View, TextInput, Image, ImageBackground, TouchableOpacity, AsyncStorage, ScrollView, KeyboardAvoidingView } from 'react-native';
import { ToastAndroid, Platform } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const resetAction2 = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Home' })],
});
const resetAction3 = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'SecurityHome' })],
});

export default class login extends React.Component {
  static navigationOptions = {
    header: null,

  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      behavior: 'position',
      expoPushToken: '',
      notification: {},
    }
  }

  componentDidMount() {
    this.registerForPushNotificationsAsync();
  }

  _handleNotification = (notification) => {
    Vibration.vibrate()
    this.setState({ notification });
    if (notification.origin === 'selected') {
      if (global.role == '2' || global.role == '6') {
        this.props.navigation.navigate('OwnerNotification')
      } else if (global.role == '3') {
        this.props.navigation.navigate('CheckInRequests')
      }
    }
  }

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });

      if (Platform.OS === 'android') {
        let channel = {
          name: 'notification',
          sound: true,
          priority: 'max',
          vibrate: [0, 250, 250, 250],
        }

        Notifications.createChannelAndroidAsync('notification', channel)
      }
    } else {
      alert('Must use physical device for Push Notifications');
    }
  };

  async storeToken(USER_ID) {
    try {
      await AsyncStorage.setItem("OWNER_ID", USER_ID);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  OpenForgotPassword() {

    if (Object.keys(this.state.email).length == 0) {
      Alert.alert(
        'Alert',
        "Username is required!",
        [

          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else if (Object.keys(this.state.email).length < 8) {
      Alert.alert(
        'Alert',
        "Username must be minimum 8 characters!",
        [

          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else {
      this.props.navigation.navigate('ForgotPassword', {
        userName: this.state.email,
      })
    }

  }

  openPrivacyPolicy() {
    this.props.navigation.navigate('PrivacyPolicy')
  }

  openTermsCondition() {
    this.props.navigation.navigate('TermsCondition')
  }

  handlePress = async () => {


    if (Object.keys(this.state.email).length == 0) {
      Alert.alert(
        'Alert',
        "Username is required!",
        [

          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else if (Object.keys(this.state.email).length < 8) {
      Alert.alert(
        'Alert',
        "Username must be minimum 8 characters!",
        [

          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else if (Object.keys(this.state.password).length == 0) {
      Alert.alert(
        'Alert',
        "Password is required!",
        [

          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else {
      let token = await Notifications.getExpoPushTokenAsync();

      console.log("Token:::" + this.state.expoPushToken);
      fetch('http://api.mysafegate.com/api/Users/GetValidUserDetails', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "RequestHeader": {
            "SourceID": ""
          },
          "RequestData": {
            "UserName": this.state.email.trim(),
            "Password": this.state.password.trim(),
            "DeviceID": this.state.expoPushToken
          }

        })
        , // data can be `string` or {object}!

      }).then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            isLoading: false,
            dataSource: responseJson.ResponseCode,
          })

          console.log(responseJson);
          console.log(responseJson.ResponseData.ResponseCode);
          // console.log(this.state.email);
          // console.log(this.state.password);
          if (responseJson.ResponseData.ResponseCode == 101 || responseJson.ResponseData.ResponseCode == 'EXC') {
            // this.props.navigation.navigate('Home')
            Alert.alert(
              'Alert',
              responseJson.ResponseData.ResponseDescription,
              [

                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: false },
            );
          }
          else {
            this._notificationSubscription = Notifications.addListener(
              this._handleNotification
            );
            ToastAndroid.showWithGravityAndOffset(
              "Login Successfull!",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );


            this.storeToken(responseJson.ResponseData.UserInfo.UserID);


            global.flatno = responseJson.ResponseData.FlatDetails.FlatID;
            AsyncStorage.setItem('USER_ID', responseJson.ResponseData.UserInfo.UserID);
            AsyncStorage.setItem('USER_NAME', responseJson.ResponseData.UserInfo.FirstName + " " + responseJson.ResponseData.UserInfo.LastName);
            AsyncStorage.setItem('USER_DATA', JSON.stringify(responseJson.ResponseData.UserInfo));

            if (responseJson.ResponseData.FlatDetails) {
              AsyncStorage.setItem('FLAT_DATA', JSON.stringify(responseJson.ResponseData.FlatDetails));
            }
            console.log(responseJson.ResponseData.UserInfo.UserID);
            console.log(AsyncStorage.getItem('USER_ID'));

            global.idss = responseJson.ResponseData.UserInfo.UserID;
            global.user = responseJson.ResponseData.UserInfo;
            if (responseJson.ResponseData.UserInfo.RoleID == '2') {
              global.flats = responseJson.ResponseData.FlatDetails;
              this.props.navigation.dispatch(resetAction2)
              global.role = '2';
            } else if (responseJson.ResponseData.UserInfo.RoleID == '6') {
              global.flats = responseJson.ResponseData.FlatDetails;
              this.props.navigation.dispatch(resetAction2)
              global.role = '6';
            } else if (responseJson.ResponseData.UserInfo.RoleID == '3') {
              this.props.navigation.dispatch(resetAction3)
              global.role = '3';
            }
          }

        })
        .catch((error) => {
          console.error(error);
        });

    }

  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView keyboardShouldPersistTaps='handled'>
            <View style={styles.curve}>
              <ImageBackground source={require('./assets/img-icon/Image.jpg')} style={styles.backgroundImage} >
                <Image name="save" style={styles.img} source={require('./assets/img-icon/w-logo.png')} />
              </ImageBackground>
            </View>

            <View style={styles.container}>

              <Text style={styles.welcomeText}>Welcome!</Text>
              <Text style={styles.subText}>Please fill the below details to login</Text>

              <TextInput
                placeholder="      Username"
                style={styles.inputBoxEmail}
                onChangeText={(text) => this.setState({ email: text })}
              />

              <TextInput
                placeholder="      Password"
                secureTextEntry={true}
                style={styles.inputBoxPassword}
                onChangeText={(text) => this.setState({ password: text })}
              />

              <Text style={styles.forgot} onPress={this.OpenForgotPassword.bind(this)}>Forgot Password ?</Text>
              <TouchableOpacity style={styles.ButtonContainer} onPress={this.handlePress.bind(this)}>
                <Text style={[styles.setFontSize, styles.setColorRed]}>LOGIN</Text>
              </TouchableOpacity>
              <View style={{ alignItems: 'center', alignContent: 'center' }}>
                <Text style={styles.terms} onPress={this.openPrivacyPolicy.bind(this)}>Privacy Policy</Text>
                <Text style={styles.terms} onPress={this.openTermsCondition.bind(this)}>Terms & Conditions</Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  curve: {
    alignSelf: 'stretch',
    height: 250,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
    // backgroundColor: '#ee4124',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // marginTop: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,

    justifyContent: 'center',
  },
  img: {
    height: 120,
    width: 110,
  },
  forgot: {
    width: 300,
    paddingLeft: 175,
    paddingBottom: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  }, terms: {
    paddingBottom: 10,
    color: '#ee4124'
  },
  inputEmail: {
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginTop: 50
  },
  inputPassword: {
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 10
  },
  welcomeText: {
    fontSize: 25,
    color: '#ee4124',
    paddingHorizontal: 10
  },
  subText: {
    paddingHorizontal: 10
  },
  ButtonContainer: {
    alignItems: 'flex-end',

    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ee4124',
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
  inputBoxEmail: {

    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginTop: 40,
    width: 300,
    backgroundColor: '#eee',
    borderRadius: 25
  },
  inputBoxPassword: {
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 10,
    width: 300,
    backgroundColor: '#eee',
    borderRadius: 25,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  setColorRed: {
    color: '#fff'
  }
});
