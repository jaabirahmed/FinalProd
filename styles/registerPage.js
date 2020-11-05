import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    headerViewStyle:{
        width: Dimensions.get("window").width/1.4
    },
    headerTextStyle:{
        color: Colors.accent, 
        fontWeight: 'bold', 
        fontSize: Dimensions.get("screen").width>400?14:10, 
        textAlign: 'center', 
    },
    container:{
        width: Dimensions.get("window").width,
        height: Dimensions.get('window').height,
        flex: 1,
    },
    textContainer:{ 
        shadowColor: 'black', 
        backgroundColor: 'white', 
        paddingLeft: Dimensions.get('window').width/12, 
        paddingTop: Dimensions.get('window').height/80,
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
    photoIntentMainText:{
        fontWeight: 'bold', 
        fontSize: Dimensions.get("window").width>400?16:12,
        marginTop: Dimensions.get('window').height/90,
    },
    photoIntentCloseButton:{
        marginLeft: Dimensions.get("window").width/3, 
        marginTop: Dimensions.get('window').height/90,
    },
    photoIntentImageView:{
        paddingTop: Dimensions.get('window').height/80,
        alignItems:'center'
    },
    photoIntentImage:{
        height: Dimensions.get('window').height/6,
        width: Dimensions.get('window').width/4,
        borderWidth: 2,
        borderColor: 'black'
    },
    photoIntentTextBottom:{
        fontSize:  Dimensions.get("window").width>400?16:12, 
        marginLeft: Dimensions.get("window").width/12, 
        marginTop: Dimensions.get("window").height/90
    },
    memberIntentMainText:{
        fontWeight: 'bold', 
        fontSize: Dimensions.get("window").width>400?16:12,
        marginTop: Dimensions.get('window').height/90,
    },
    memberIntentCloseButton:{
        marginLeft: Dimensions.get("window").width/3, 
        marginTop: Dimensions.get('window').height/90,
    },
    memberIntentTextBottom:{
        fontSize:  Dimensions.get("window").width>400?16:12, 
        marginLeft: Dimensions.get("window").width/12, 
        marginTop: Dimensions.get("window").height/90
    },
    mainInputView:{
        flexDirection: 'row', 
        marginTop: Dimensions.get('window').height/90
    },
    commonTextInputDesign:{
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderColor: '#DADBDD',
        width: Dimensions.get("window").width/2.5,
        fontSize: Dimensions.get("window").width>400?16:12,
        paddingTop: Dimensions.get("window").height/90
    },
    errorView:{
        marginTop:Dimensions.get("window").height/90,
        backgroundColor:'#F8D7DA',
        alignItems:'center',
        borderRadius: 10,
    },
    errorTextMessage: {
        color:'#721C24',
        fontWeight:'bold',
        fontSize:Dimensions.get('window').width>400?16:12,
        height:Dimensions.get('window').height/25,
    },
    successView:{
        marginTop:Dimensions.get("window").height/90,
        backgroundColor:'#D4EDDA',
        alignItems:'center',
        borderRadius: 10,
        width:Dimensions.get("window").width/1.2,
        alignItems:'center'
    },
    successViewText: {
        color:'#50855C',
        fontWeight:'bold',
        fontSize:Dimensions.get('window').width>400?16:12,
        height:Dimensions.get('window').height/25,
    },
    userImageView:{
        paddingTop: Dimensions.get("window").height/90,
        paddingLeft: Dimensions.get("window").width/6,
    },
    commonInputView:{
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        paddingTop: Dimensions.get("window").height/90,
    },
    commonTextInputDesign2:{
        fontSize: Dimensions.get("window").width>400?16:12,
        width: Dimensions.get("window").width/2.5, 
        paddingVertical: 4, 
        borderBottomWidth: 1, 
        borderColor: '#DADBDD'
    },
    addressTextArea:{
        fontSize: Dimensions.get("window").width>400?16:12, 
        width: Dimensions.get("window").width/1.2, 
        borderRadius: 10, 
        paddingLeft: Dimensions.get("window").width/40, 
        paddingVertical: 4, 
        height: Dimensions.get('window').height/6, 
        borderWidth: 1, 
        marginTop: Dimensions.get('window').height/80, 
        borderColor: '#DADBDD'
    },
    dobMainView:{
        paddingTop: Dimensions.get("window").height/90
    },
    dobsecondView:{
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        paddingTop: Dimensions.get("window").height/90
    },
    dobText:{
        fontSize: Dimensions.get("window").width>400?16:12,
        paddingTop: Dimensions.get("window").height/90, 
        fontWeight: 'bold'
    },
    dobTextInput1:{
        fontSize: Dimensions.get("window").width>400?16:12, 
        width: Dimensions.get('window').width/3.2, 
        paddingTop: Dimensions.get("window").height/85, 
        color: '#000000a8'
    },
    familyView:{
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        paddingTop: Dimensions.get("window").height/90
    },
    genderView:{
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        paddingTop:Dimensions.get("window").height/85
    },
    genderRadioButton:{
        flexDirection: 'row', 
        marginVertical: Dimensions.get("window").width/45
    },
    genderImage:{
        width: Dimensions.get('window').width/18, 
        height: Dimensions.get('window').height/30, 
    },
    genderText:{
        marginLeft: 5,
        fontSize:Dimensions.get('window').width>400?14:12
    },
    qualificationPicker:{
        width: Dimensions.get('window').width/2.55, 
        marginLeft: Dimensions.get('window').width/9
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: Dimensions.get('window').width/16,
        marginTop: Dimensions.get('window').height/90
    },
    checkbox: {
        alignSelf: "center",
    },
    checkboxLabel: {
        marginTop:Dimensions.get('window').height/90,
        fontSize: Dimensions.get('window').width>400?14:12
    },
    checkboxLabel2:{
        marginTop: Dimensions.get('window').height/60,
        marginLeft: Dimensions.get('window').width/28 
    },
    ButtonContainer: {
        padding: Dimensions.get('window').height/90,
        alignItems: 'center',
        backgroundColor: Colors.accent,
        height: Dimensions.get('window').height/20,
        width: Dimensions.get('window').width/1.5,
        marginRight: Dimensions.get('window').width/18,
        borderRadius: 10,
        marginTop:  Dimensions.get('window').height/90
    },
    buttonFontSize: {
        fontWeight: 'bold',
        fontSize:Dimensions.get('window').width>400?16:12,
    },
    buttonColor: {
        color: '#fff'
    },
    emailLink: {
        marginTop: Dimensions.get('window').height/98,
        paddingHorizontal: Dimensions.get('window').height/98,
    },
    emailLinkColor: {
        color: "#3b5b7e",
    },
    footerView:{
        marginTop:Dimensions.get('window').height/80,
        width: Dimensions.get('window').width/1, 
         },
    footersecondView:{
        backgroundColor: Colors.primary, 
        height: Dimensions.get('window').height/10
    },
    footerText:{
        color: Colors.accent, 
        fontWeight: 'bold', 
        fontSize: Dimensions.get('window').width>400?14:10, 
        margin: Dimensions.get('window').height/90, 
        textAlign: 'center' 
    },
    footerText1:{
        color: Colors.accent, 
        fontWeight: '400', 
        fontSize: Dimensions.get('window').width>400?14:10, 
        textAlign: 'center' 
    }
});

export default styles;