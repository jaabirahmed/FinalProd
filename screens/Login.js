import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
  Dimensions,
  ActivityIndicator
} from "react-native";
import styles from '../styles/loginPage';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Hyperlink from 'react-native-hyperlink';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameError: "",
      password: "",
      passwordError: "",
      commonError: "",
      behavior: "position",
      isVisible: false,
      isLoading: false,
    };
  }
  userNameValidation(){
    if(this.state.username==""){
      this.setState({usernameError:'User Name field can not be empty'})
    }else{
      this.setState({usernameError:''})  
    }
  } 
  passwordValidation(){
    if(this.state.password==""){
      this.setState({passwordError:'Password field can not be empty'})
    }else{
      this.setState({passwordError:''})  
    }
  } 

  handlePress = async () => {
    let collection = {}
    if(this.state.username=="" || this.state.password==""){
      this.setState({commonError:'Username or Password is empty'})
    }else{
      this.setState({commonError:''})
      this.setState({isLoading:true})
      collection.userName = this.state.username,
      collection.password = this.state.password
      fetch("http://iqrarewards-env.eba-tzpt24cp.us-east-1.elasticbeanstalk.com/api/iqra/login", {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(collection),
      }).then(response => response.json()).then(data => {
        if (data.message == "UserName or Password is incorrect") {
          this.setState({isLoading:false})
          this.setState({commonError:'Username or Password is Incorrect'})
        } else {
          this.setState({isLoading:false})
          this.props.navigation.replace('AppDrawer', { params1: { name: data.userName, username: data.username, designation: data.designation, photo: data.userImage } });
          this.setState({commonError:''})
        }
      }).catch((error) => {
        console.error('Error:', error);
        this.setState({commonError:error})
      });
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <Modal
              animationType={"slide"}
              transparent={true}
              visible={this.state.isVisible}
              onRequestClose={() => { this.setState({ isVisible: !this.state.isVisible }) }}>
              <View style={styles.modal}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.modalMainText}>
                    IQRA Rewards Intent
                    </Text>
                  <Text style={styles.modalCloseButton} onPress={() => {
                    this.setState({ isVisible: !this.state.isVisible })
                  }} >
                    <Ionicons name="ios-close-circle" size={15} color={Colors.accent} />
                  </Text>
                </View>
                <View>
                  <Text style={styles.modalTextBottom}>- A non-profit organization, aiming to elevate the family relationships by leveraging the knowledge capital persist inside the family for the betterment of the next generation.</Text>
                  <Text style={styles.modalTextBottom}>- It gives the opportunity to excel in the Islamic and Academic journey respecting family value.</Text>
                  <Text style={styles.modalTextBottom}>- For an individual it supports, encourages, motivates, and rewards for there Islamic and academic achievements in the form points which they avail through shopping in the IQRA Emporium.</Text>
                </View>
              </View>
            </Modal>
            <View style={styles.iqraLogoView}>
              <ImageBackground style={styles.backgroundImage} >
                <Image
                  name="save"
                  style={styles.iqraLogo}
                  source={require("../assets/iqra-logo.png")}
                />
                <Text style={styles.iqraText}>
                  A journey to{" "}
                  <Text style={styles.iqraTitleText}>Sadaqah Jariyah,</Text> begins
                from Home!
              </Text>
              </ImageBackground>
            </View>
            <ActivityIndicator style={{ position:this.state.isLoading==true?"relative":"absolute",alignItems: 'center',justifyContent: 'center'}} size="large" color="green" animating={this.state.isLoading}/>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="      Username"
                style={styles.commonTextInput}
                onChangeText={(text) => this.setState({ username: text })}
                onBlur={this.userNameValidation.bind(this)}
              />
              <View style={styles.errorView}>
                <Text style={[{position:this.state.usernameError==""?"absolute":"relative"},styles.errorTextMessage]}>{this.state.usernameError}</Text>
              </View>
              <TextInput
                placeholder="      Password"
                secureTextEntry={true}
                style={styles.commonTextInput}
                onChangeText={(text) => this.setState({ password: text })}
                onBlur={this.passwordValidation.bind(this)}
              />
              <View style={styles.errorView}>
                <Text style={[{position:this.state.passwordError==""?"absolute":"relative"},styles.errorTextMessage]}>{this.state.passwordError}</Text>
              </View>
              <Text
                style={styles.forgotPassword}
              >
                Forgot Password ?
              </Text>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.ButtonContainer} onPress={this.handlePress.bind(this)} >
                  <Text style={[styles.buttonColor, styles.buttonFontSize]}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.errorView}>
                  <Text style={[{position:this.state.commonError==""?"absolute":"relative"},styles.errorTextMessage]}>{this.state.commonError}</Text>
                </View>
              </View>
              <View style={{ alignItems: "center", alignContent: "center" }}>
                <Text style={styles.TextLink}>
                  New User? Submit your{" "}
                  <Text style={styles.TextLinkColor} onPress={() => navigate(
                    'Register'
                  )}>
                    onboarding request
                  </Text>
                </Text>
                <Text style={styles.TextLink}>
                  {"\n"}Just want to learn more and contribute?
                </Text>
                <Hyperlink linkDefault={true}>
                  <Text style={styles.TextLink}>
                    Visit:{" "}
                    <Text
                      style={styles.TextLinkColor}>
                      www.iqrarewards.com
                        </Text>
                  </Text>
                </Hyperlink>


                <Hyperlink linkDefault={true}>
                  <Text style={styles.TextLink}>
                    Email:{" "}
                    <Text
                      style={styles.TextLinkColor}
                    >
                      iqrarewards@gmail.com
                  </Text>
                  </Text>
                </Hyperlink>
                <View style={{ height: Dimensions.get('window').height/20, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                  <Text style={{
                    color: Colors.accent, fontWeight: 'bold', fontSize:  Dimensions.get('window').width>400?14:10
                  }}>IQRA Rewards{" "}
                    <Text style={{ fontWeight: '300' }} onPress={() => { this.setState({ isVisible: true }) }} >
                      intent  <Ionicons name="ios-information-circle" size={15} color={Colors.golden} />
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.footerView}>
              <View style={styles.footersecondView}>
                <Text numberOfLines={3} style={styles.footerText}>
                  Hadith: <Text style={styles.footerText1}>
                    Messenger of Allah (PBUH) said: "Whoever takes a path upon which to obtain
                    knowledge, Allah makes the path to Paradise easy for him."
              </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
      </View>
    );
  }
}

export default Login;