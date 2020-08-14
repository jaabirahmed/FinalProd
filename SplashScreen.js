/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-floating-decimal */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable keyword-spacing */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from "react-native";
//import all the basic component we have used
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { StackActions, NavigationActions } from "react-navigation";

const resetAction1 = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "login" })],
});

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  displayData = async () => {
    try {
      let user = JSON.parse(await AsyncStorage.getItem("USER_DATA"));
      console.log(user);

      global.user = user;

      if (user == null) {
        this.props.navigation.dispatch(resetAction1);
        // this.props.navigation.navigate('login')
      } else {
        global.idss = user.UserID;
        if (user.RoleID == "2") {
          global.flats = JSON.parse(await AsyncStorage.getItem("FLAT_DATA"));
          this.props.navigation.dispatch(resetAction1);
        } else if (user.RoleID == "3") {
          this.props.navigation.dispatch(resetAction1);
          // this.props.navigation.navigate('Home')
        } else {
          await AsyncStorage.removeItem("OWNER_ID");
          await AsyncStorage.removeItem("USER_ID");
          await AsyncStorage.removeItem("USER_NAME");
          await AsyncStorage.removeItem("USER_DATA");
          await AsyncStorage.removeItem("FLAT_DATA");
          this.props.navigation.dispatch(resetAction1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.displayData();
  }

  render() {
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
