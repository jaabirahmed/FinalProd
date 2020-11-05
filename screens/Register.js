import React, { Component } from 'react';
import {
    Text, View, TextInput,
    Image, TouchableOpacity, ScrollView, Picker, Modal, CheckBox, Dimensions,
    ActivityIndicator
} from 'react-native';
import styles from '../styles/registerPage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import islamicMoment from 'moment-hijri';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImgPicker from '../components/ImageSelector';
import Hyperlink from 'react-native-hyperlink';
import Textarea from 'react-native-textarea';


class Register extends Component {
    constructor() {
        super()
        this.state = {
            genderData: [{
                    "genderId": 0,
                    "value": "Male",
                    },
                    {
                    "genderId": 1,
                    "value": "Female",
                  }],
            checked: 0,
            visibility: false,
            isVisible: false,
            isVisible1: false,
            isSelected: false,
            image: null,
            teamValues:[],
            teamselectedvalue:'',
            familyValues:[],
            familyselectedvalue:'',
            qualificationValues:[],
            qualificationselectedvalue:'',

            //Input Fields
            username: '',
            usernameError: '',
            password: '',
            passwordError: '',
            fullname: '',
            fullnameError: '',
            emailid: '',
            emailidError: '',
            mobile: '',
            mobileError: '',
            hobbies: '',
            hobbiesError: '',
            address: '',
            addressError: '',
            fulldate: '',
            dob: '',
            islamicdob: '',
            gender: 'male',
            commonError: '',
            isStudent: true,
            insertSuccess: '',
            isLoading: false,
        }
    }

    //Validation Functions
    userNameValidation(){
        if(this.state.username==""){
          this.setState({usernameError:'User Name empty'})
        }else{
          this.setState({usernameError:''})  
        }
    } 
    passwordValidation(){
        if(this.state.password==""){
          this.setState({passwordError:'Password empty'})
        }else{
          this.setState({passwordError:''})  
        }
    }
    fullnameValidation(){
        if(this.state.fullname==""){
          this.setState({fullnameError:'Name empty'})
        }else{
          this.setState({fullnameError:''})  
        }
    }
    emailValidation(){
        if(this.state.emailid==""){
          this.setState({emailidError:'Email empty'})
        }else{
          this.setState({emailidError:''})  
        }
    }
    mobileValidation(){
        if(this.state.mobile==""){
          this.setState({mobileError:'Mobile No empty'})
        }else{
          this.setState({mobileError:''})  
        }
    }
    hobbiesValidation(){
        if(this.state.hobbies==""){
          this.setState({hobbiesError:'Enter empty'})
        }else{
          this.setState({hobbiesError:''})  
        }
    }
    addressValidation(){
        if(this.state.address==""){
          this.setState({addressError:'Address empty'})
        }else{
          this.setState({addressError:''})  
        }
    }

    //API for Team Data
    getTeamData = () => {
        fetch('http://iqrarewards-env.eba-tzpt24cp.us-east-1.elasticbeanstalk.com/api/iqra/teams')
        .then(response => response.json())
        .then(json => {
            this.setState({
                teamValues:json
            })
        })
    }
    //API for Family Data
    getFamilyData = () => {
        fetch('http://iqrarewards-env.eba-tzpt24cp.us-east-1.elasticbeanstalk.com/api/iqra/families')
        .then(response => response.json())
        .then(json => {
            this.setState({
                familyValues:json
            })
        })
    }
    //API for Qualification Data
    getQualificationData = () => {
        fetch('http://iqrarewards-env.eba-tzpt24cp.us-east-1.elasticbeanstalk.com/api/iqra/qualifications')
        .then(response => response.json())
        .then(json => {
            this.setState({
                qualificationValues:json
            })
        })
    }
    //Call api for Picker Data
    componentDidMount() {
        this.getTeamData();
        this.getFamilyData();
        this.getQualificationData();
    }
    //Date Picker Functions
    handleConfirm = (date) => {
        this.setState({fulldate:date.toUTCString()})
        this.setState({ dob: Moment(date.toUTCString()).format('YYYY-MM-DD') })
        this.setState({islamicDob: islamicMoment(date.toUTCString()).format('iDD/iMMM/iYYYY')})
        this.setState({ visibility: false })
    }
    onPressCancel = () => {
        this.setState({ visibility: false })
        this.setState({ dob: "" })
        this.setState({fulldate: ""})
        this.setState({islamicDob: ""})
    }
    onPressButton = () => {
        this.setState({ dob: "" })
        this.setState({fulldate: ""})
        this.setState({islamicDob: ""})
        this.setState({ visibility: true })
    }
    // Function to call the POST API
    registerUser = async () => {
        if(this.state.userName=="" || this.state.password==""|| 
           this.state.fullname=="" || this.state.emailid=="" ||
           this.state.mobileNo=="" || this.state.hobbies=="" ||
           this.state.address== "" || this.state.dob==""     || 
           this.state.familyselectedvalue=="" || this.state.teamselectedvalue== ""||
           this.state.qualificationselectedvalue == "" || this.state.isSelected==false){
           this.setState({commonError:'Insert all the fields before proceeding'})
        }else{
            this.setState({commonError:''})
            this.setState({isLoading:true})
            let jsonObject={
            "acknowledge": this.state.isSelected,
            "active": true,
            "emailId": this.state.emailid,
            "enableNotification": true,
            "englishDob": this.state.dob,
            "familyDto": {
              "familyId": parseInt(this.state.familyselectedvalue)
            },
            "geneder": this.state.gender,
            "hobbies": this.state.hobbies,
            "islamicDob": this.state.islamicDob,
            "loginId": this.state.emailid,
            "mobileNo": this.state.mobile,
            "participate": true,
            "photoFilename": "file1",
            "qualificationDto": {
                "qualificationId": parseInt(this.state.qualificationselectedvalue),
            },
            "student": this.state.isStudent,
            "teamDto": {
              "teamId": parseInt(this.state.teamselectedvalue),
            },
            "userAddress": this.state.address,
            "userCity":"NA",
            "userName": this.state.username,
            "userPassword": this.state.password,
            "userPostalCode": "NA",
            "volunteer": true
          }
          fetch("http://iqrarewards-env.eba-tzpt24cp.us-east-1.elasticbeanstalk.com/api/iqra/user", {
            method: "POST",
            headers: {
              "Accept": "*/*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonObject),
          }).then(response => {
            if(!response.ok) {
                this.setState({isLoading:false})
                this.setState({commonError:"Error recieved while calling the API. Errorcode: "+response.status})
            }
            else {
                this.setState({isLoading:false})
                this.setState({insertSuccess:'Registration Successful. Kindly Login'})
            }
          })
        .catch((error) => {
                this.setState({commonError:'Exception occured:'+error})
          });

       
        }
      };
    render() {
        Moment.locale('en');
        let teams = this.state.teamValues.map((teamValue,teamIndex)=>{
            return(
                <Picker.Item label={teamValue.teamName} value={teamValue.teamId} key={teamIndex}/>
            )
        });
        let qualifications = this.state.qualificationValues.map((qualificationValue,qualificationIndex)=>{
            return(
                <Picker.Item label={qualificationValue.qualificationName} value={qualificationValue.qualificationId} key={qualificationIndex}/>
            )
        });
        let families = this.state.familyValues.map((familyValue,familyIndex)=>{
            return(
                <Picker.Item label={familyValue.familyName} value={familyValue.familyId} key={familyIndex}/>
            )
        });

        return (
            <View style={styles.container}>
                <ScrollView >
                    <View style={styles.textContainer}>
                        <Modal
                            animationType={"slide"}
                            transparent={true}
                            visible={this.state.isVisible}
                            onRequestClose={() => { this.setState({ isVisible: !this.state.isVisible }) }}>
                            <View style={styles.modal}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.photoIntentMainText}>
                                        IQRA Photo Specification
                                    </Text>
                                    <Text style={styles.photoIntentCloseButton} onPress={() => {
                                        this.setState({ isVisible: !this.state.isVisible })
                                    }} >
                                        <Ionicons name="ios-close-circle" size={18} color={Colors.accent} />
                                    </Text>
                                </View>
                                <View>
                                    <View style={styles.photoIntentImageView}>
                                        <Image name="save" style={styles.photoIntentImage} source={require('../assets/user.png')} />
                                    </View>
                                    <Text style={styles.photoIntentTextBottom}>- Take the best Photo and upload it</Text>
                                    <Text style={styles.photoIntentTextBottom}>- Make sure the background is light color</Text>
                                    <Text style={styles.photoIntentTextBottom}>- Have a smile as its Sunnah!</Text>
                                    <Text style={styles.photoIntentTextBottom}>- Only face and some neck portion to be visible</Text>
                                    <Text style={styles.photoIntentTextBottom}>- Only JPEG, IMG, GIF format only</Text>
                                    <Text style={styles.photoIntentTextBottom}>- Image size not to exceed 240 kB</Text>
                                </View>
                            </View>
                        </Modal>
                        <Modal
                            animationType={"slide"}
                            transparent={true}
                            visible={this.state.isVisible1}
                            onRequestClose={() => { this.setState({ isVisible1: !this.state.isVisible1 }) }}>
                            <View style={styles.modal}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.memberIntentMainText}>
                                        Member Acknowledgment
                                    </Text>
                                    <Text style={styles.memberIntentCloseButton} onPress={() => {
                                        this.setState({ isVisible1: !this.state.isVisible1 })
                                    }} >
                                        <Ionicons name="ios-close-circle" size={16} color={Colors.accent} />
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.memberIntentTextBottom}>I will participate in most of the events and activities which will be organized by IQRA Rewards</Text>
                                    <Text style={styles.memberIntentTextBottom}>I would love to contribute and participate in any of the volunteer assignments to the best of my ability</Text>
                                    <Text style={styles.memberIntentTextBottom}>I acknowledge, all the infrmation whcih i will be submitting is with all HONESTY adn to seek ALLAH ‘s pleasure and improve my KNOWLEDGE capital</Text>
                                </View>
                            </View>
                        </Modal>
                        <View style={styles.mainInputView}>
                            <View style={{marginTop: Dimensions.get('window').height/50}}>
                                <TextInput
                                    placeholder="User Name"
                                    style={styles.commonTextInputDesign}
                                    placeholderTextColor="#000000a8"
                                    onChangeText={(text) => this.setState({ username: text })}
                                    onBlur={this.userNameValidation.bind(this)}
                                />
                                <View style={[{position:this.state.usernameError==''?"absolute":"relative"},styles.errorView]}>
                                    <Text style={[{position:this.state.usernameError==''?"absolute":"relative"},styles.errorTextMessage]}>{this.state.usernameError}</Text>
                                </View>
                                <TextInput
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    style={styles.commonTextInputDesign}
                                    placeholderTextColor="#000000a8"
                                    onChangeText={(text) => this.setState({ password: text })}
                                    onBlur={this.passwordValidation.bind(this)}
                                />
                                <View style={[{position:this.state.passwordError==''?"absolute":"relative"},styles.errorView]}>
                                    <Text style={[{position:this.state.passwordError==''?"absolute":"relative"},styles.errorTextMessage]}>{this.state.passwordError}</Text>
                                </View>
                            </View>
                            <View style={styles.userImageView}>
                                <ImgPicker />
                                <Text style={{ textAlign: 'center' }} onPress={() => { this.setState({ isVisible: true }) }}><Ionicons name="ios-information-circle" size={16} color={Colors.golden} /></Text>
                            </View>
                        </View>

                        <View style={styles.commonInputView}>
                            <TextInput
                                placeholder="Full Name"
                                style={styles.commonTextInputDesign2}
                                placeholderTextColor="#000000a8"
                                onChangeText={(text) => this.setState({ fullname: text })}
                                onBlur={this.fullnameValidation.bind(this)}
                            />
                            <TextInput
                                placeholder="Email ID"
                                style={[styles.commonTextInputDesign2,{ marginLeft:Dimensions.get('window').width/25}]}
                                placeholderTextColor="#000000a8"
                                onChangeText={(text) => this.setState({ emailid: text })}
                                onBlur={this.emailValidation.bind(this)}
                            />
                        </View>
                        <View style={[{position:this.state.fullnameError==''?"absolute":"relative"},styles.errorView]}>
                            <Text style={[{position:this.state.fullnameError==''?"absolute":"relative"},styles.errorTextMessage]}>{this.state.fullnameError}</Text>
                        </View>
                        <View style={[{position:this.state.emailidError==''?"absolute":"relative"},styles.errorView]}>
                            <Text style={[{position:this.state.emailidError==''?"absolute":"relative"},styles.errorTextMessage]}>{this.state.emailidError}</Text>
                        </View>
                        <View style={styles.commonInputView}>
                            <TextInput
                                placeholder="Mobile"
                                autoCorrect={false}
                                keyboardType="number-pad" maxLength={10}
                                style={styles.commonTextInputDesign2}
                                placeholderTextColor="#000000a8"
                                onChangeText={(text) => this.setState({ mobile: text })}
                                onBlur={this.mobileValidation.bind(this)}
                            />
                            <TextInput
                                placeholder="Hobbies"
                                style={[styles.commonTextInputDesign2,{ marginLeft:Dimensions.get('window').width/25}]}
                                placeholderTextColor="#000000a8"
                                onChangeText={(text) => this.setState({ hobbies: text })}
                                onBlur={this.hobbiesValidation.bind(this)}
                            />
                        </View>
                        <View style={[{position:this.state.mobileError==''?"absolute":"relative"},styles.errorView]}>
                            <Text style={[{position:this.state.mobileError==''?"absolute":"relative"},styles.errorTextMessage]}>{this.state.mobileError}</Text>
                        </View>
                        <View style={[{position:this.state.hobbiesError==''?"absolute":"relative"},styles.errorView]}>
                            <Text style={[{position:this.state.hobbiesError==''?"absolute":"relative"},styles.errorTextMessage]}>{this.state.hobbiesError}</Text>
                        </View>
                        <View style={{ height: Dimensions.get("window").height/6 }}>
                            <Textarea
                                placeholder="Address"
                                style={styles.addressTextArea}
                                placeholderTextColor="#000000a8"
                                onChangeText={(text) => this.setState({ address: text })}
                                onBlur={this.addressValidation.bind(this)}
                            />
                        </View>
                        <View style={[{position:this.state.addressError==''?"absolute":"relative"},styles.errorView]}>
                            <Text style={[{position:this.state.addressError==''?"absolute":"relative"},styles.errorTextMessage]}>{this.state.addressError}</Text>
                        </View>
                        <View>
                            <DateTimePickerModal
                                isVisible={this.state.visibility}
                                mode="date"
                                onConfirm={this.handleConfirm}
                                onCancel={this.onPressCancel}
                            />
                        </View>
                        <View style={styles.dobMainView}>
                            <View style={styles.dobsecondView}>
                                <Text style={styles.dobText}>Date of Birth:</Text>
                                <Text style={[styles.dobText,{ paddingLeft: Dimensions.get('window').width/4.5}]}>Islamic DOB:</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Text
                                    style={styles.dobTextInput1}
                                >{this.state.dob == "" ? "Select" : this.state.dob }
                                </Text>
                                <Text style={{ paddingTop: Dimensions.get('window').height/85 }}
                                    onPress={this.onPressButton}>
                                    <Ionicons name="md-calendar" size={24} color="black" />
                                </Text>
                                <Text
                                    style={[styles.dobTextInput1,{  marginLeft: Dimensions.get('window').width/10 }]}
                                >{this.state.dob == "" ? "Calculated" : this.state.islamicDob} {this.state.dob == "" ? "" : (Moment(this.state.fulldate).format('ddd'))}  
                                </Text>

                            </View>
                        </View>
                        <ActivityIndicator style={{ position:this.state.isLoading==true?"relative":"absolute",alignItems: 'center',justifyContent: 'center'}} size="large" color="green" animating={this.state.isLoading}/>
                        <View style={styles.familyView}>
                            <Text style={styles.dobText}>Family:</Text>
                            <Text style={[styles.dobText,{ paddingLeft: Dimensions.get('window').width/3}]}>Team:</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Picker selectedValue={this.state.familyselectedvalue}
                                onValueChange={(itemValue, itemIndex) => { this, this.setState({ familyselectedvalue: itemValue }) }}
                                style={{ width: Dimensions.get("window").width/2.5 }}>
                                <Picker.Item label="Select" value="" />
                                {families}
                            </Picker>
                            <Picker selectedValue={this.state.teamselectedvalue}
                                onValueChange={(itemValue, itemIndex) => { this, this.setState({ teamselectedvalue: itemValue }) }}
                                style={{ width: Dimensions.get("window").width/2.5, marginLeft: Dimensions.get("window").width/20, borderWidth: 0 }}   >
                                 <Picker.Item label="Select" value="" />
                                {teams}
                            </Picker>
                        </View>

                        <View style={styles.familyView}>
                            <Text style={styles.dobText}>Gender:</Text>
                            <Text style={[styles.dobText,{paddingLeft: Dimensions.get('window').width/3.1 }]}>Qualification:</Text>
                        </View>
                        <View style={styles.genderView}>
                            {this.state.genderData.map((genderValue,genderIndex) => {
                                return (
                                    <View style={{marginTop:Dimensions.get('window').height/90}}>
                                         <TouchableOpacity onPress={() => 
                                         { this, 
                                            this.setState({ checked: genderIndex }),
                                            this.setState({ gender: genderValue.value})
                                        }} 
                                         style={styles.genderRadioButton}>
                                                <Image style={styles.genderImage} source={this.state.checked == genderIndex?require('../assets/rb1.png'):require('../assets/rb.png')} />
                                                <Text key={genderIndex} style={styles.genderText}>{genderValue.value}</Text>
                                            </TouchableOpacity>
                                        
                                    </View>
                                )
                            })}
                            <Picker selectedValue={this.state.qualificationselectedvalue}
                                onValueChange={(itemValue, itemIndex) => { this, this.setState({ qualificationselectedvalue: itemValue }),this.setState({ isStudent: itemValue==1?false:true}) }}
                                style={styles.qualificationPicker}>
                                <Picker.Item label="Select" value="" />
                                {qualifications}
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
                            <Text numberOfLines={2} style={styles.checkboxLabel}>I acknowledge all the terms and conditions</Text>
                            <Text style={styles.checkboxLabel2} onPress={() => { this.setState({ isVisible1: true }) }}><Ionicons name="ios-information-circle" size={15} color={Colors.golden} /></Text>


                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.ButtonContainer} onPress={this.registerUser.bind(this)}>
                                <Text style={[styles.buttonFontSize, styles.buttonColor]}>Register</Text>
                            </TouchableOpacity>
                            <View style={[{position:this.state.commonError==''?"absolute":"relative"},styles.errorView]}>
                                <Text style={[{position:this.state.commonError==''?"absolute":"relative"},styles.errorTextMessage]}>{this.state.commonError}</Text>
                            </View>
                            <View style={[{position:this.state.insertSuccess==''?"absolute":"relative"},styles.successView]}>
                                <Text style={[{position:this.state.insertSuccess==''?"absolute":"relative"},styles.successViewText]}>{this.state.insertSuccess}</Text>
                            </View>
                            <Hyperlink linkDefault={true}>
                                <Text style={styles.emailLink}>
                                    Contact:{" "}
                                    <Text
                                        style={styles.emailLinkColor}
                                    >
                                        iqrarewards@gmail.com
                                 </Text>
                                </Text>
                            </Hyperlink>
                        </View>
                    </View>
                    <View style={styles.footerView}>
                        <View style={styles.footersecondView}>
                            <Text numberOfLines={3} style={styles.footerText}>
                                Hadith:
                                <Text style={styles.footerText1}>
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
    let result = ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
        this.setState({ image: result.uri });
    }
};


export default Register;