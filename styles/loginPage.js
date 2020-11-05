import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    headerViewStyle:{
        width: Dimensions.get("window").width
    },
    headerTextStyle:{
        color: Colors.accent, 
        fontWeight: 'bold', 
        fontSize: Dimensions.get("screen").width>400?14:10, 
        textAlign: 'center', 
    },
    mainContainer:{
        flex: 1, 
        backgroundColor: "#fff", 
        marginTop: Dimensions.get('window').height/90
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
    modalMainText:{
        fontWeight: 'bold', 
        fontSize: Dimensions.get("window").width>400?16:12,
        marginTop: Dimensions.get('window').height/90,
    },
    modalCloseButton:{
        marginLeft: Dimensions.get("window").width/3, 
        marginTop: Dimensions.get('window').height/90,
    },
    modalTextBottom:{
        fontSize:  Dimensions.get("window").width>400?16:12, 
        marginLeft: Dimensions.get("window").width/12, 
        marginTop: Dimensions.get("window").height/90
    },
    iqraLogoView: {
        alignSelf: "stretch",
        height: Dimensions.get("window").height/5,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    iqraLogo: {
        marginTop: Dimensions.get("window").height/90,
        height: Dimensions.get("window").height/10,
        width: Dimensions.get("window").width/5.8,
    },
    iqraText: {
        marginTop: Dimensions.get("window").height/90,
        paddingHorizontal: Dimensions.get("window").height/90,
        fontSize:Dimensions.get('window').width>400?16:12,
    },
    iqraTitleText: {
        fontWeight: "bold",
        fontSize:Dimensions.get('window').width>400?16:12,
    },
    commonTextInput: {
        height: Dimensions.get("window").height/15,
        padding: Dimensions.get("window").height/90,
        marginTop: Dimensions.get("window").height/90,
        width: Dimensions.get("window").width/1.4,
        backgroundColor: "#eee",
        borderRadius: 25,
    },
    errorView:{
        marginTop:Dimensions.get("window").height/90,
        width: Dimensions.get("window").width/1.4,
        backgroundColor:'#F8D7DA',
        alignItems:'center',
        borderRadius: 10
    },
    errorTextMessage: {
        color:'#721C24',
        fontWeight:'bold',
        fontSize:Dimensions.get('window').width>400?16:12,
        height:Dimensions.get('window').height/25,
    },
    forgotPassword: {
        width: Dimensions.get("window").width/1.4,
        paddingLeft: Dimensions.get("window").width/2.5,
        paddingBottom: Dimensions.get("window").width/16,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        fontSize:Dimensions.get('window').width>400?14:12,
    },
    ButtonContainer: {
        padding: Dimensions.get('window').height/90,
        alignItems: 'center',
        backgroundColor: Colors.accent,
        height: Dimensions.get('window').height/18,
        width: Dimensions.get('window').width/1.3,
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
    TextLink: {
        marginTop: Dimensions.get('window').height/98,
        paddingHorizontal: Dimensions.get('window').height/98,
        fontSize:Dimensions.get('window').width>400?16:12,
    },
    TextLinkColor: {
        color: "#3b5b7e",
    },
    footerView:{
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
    },
    inputContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: Dimensions.get('window').height/90,

        justifyContent: "center",
    }
});

export default styles;