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
        fontSize: Dimensions.get("screen").width>400?20:14, 
        textAlign: 'center', 
    },
    container: {
        flex: 1
    },
    activityMain: {
        flexDirection: 'row',
        padding: Dimensions.get('window').height/90,
    },
    activitysubMain:{
        flexDirection: 'column',
        marginTop: Dimensions.get('window').height/95,
    },
    activityMainText1:{
        fontWeight: 'bold', 
        paddingLeft: Dimensions.get('window').height/95, 
        fontSize: Dimensions.get('window').width>400?12:10,
    },
    activityMainText2:{
        fontWeight: 'bold', 
        paddingLeft: 5, 
        fontSize: Dimensions.get('window').width>400?10:8,
    },
    activityMainStars:{
        fontWeight: 'bold', 
        paddingLeft: Dimensions.get('window').width/24, 
        fontSize: Dimensions.get('window').width>400?16:12,
    },
    activityMainStars2:{
        fontWeight: 'bold', 
        paddingLeft: Dimensions.get('window').height/95, 
        fontSize: Dimensions.get('window').width>400?16:12,
    },
    userImage: {
        width: Dimensions.get('window').width/10,
        height: Dimensions.get('window').height/17,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: Dimensions.get('window').height/90,
    },
    activitySecond: {
        margin: Dimensions.get('window').height/95,
        borderWidth: 2,
        borderColor: 'black',
    },
    activitySubSecond:{
        flexDirection: 'row',
        margin: Dimensions.get('window').height/95,
    },
    activitySecondIcons:{
        borderWidth: 1,
        padding: Dimensions.get('window').height/95, 
        height: Dimensions.get('window').height/22, 
        width: Dimensions.get('window').width/13, 
        textAlign: 'center'
    },
    activitySub2Second:{
        flexDirection: 'row', 
        marginTop: Dimensions.get('window').height/95,
        marginLeft:Dimensions.get('window').height/95
    },
    activitySecondText:{
        borderWidth: 1, 
        padding: Dimensions.get('window').height/100, 
        fontSize: Dimensions.get('window').width>400?10:8, 
      
       height: Dimensions.get('window').height/25,
        textAlign: 'center', 
        borderRadius: 10, 
        backgroundColor: '#123217', 
        color: 'white',
        width:Dimensions.get('window').width/5.5
    },
    activitySub3Second:{
        flexDirection: 'row', 
        margin: Dimensions.get('window').height/95,
        marginLeft:Dimensions.get('window').width/78
    },
    activitySub4Second:{
        width: Dimensions.get('window').width/1.8,
        borderWidth:2,
        height:Dimensions.get('window').height/15,
    },
    activitySub4SecondText:{
        marginTop: Dimensions.get('window').height/120, 
        marginLeft: Dimensions.get('window').height/60,
        fontSize: Dimensions.get('window').width>400?14:10, 
        fontWeight:'bold'
    },
    activityThird: {
        flexDirection: 'row',
        height: Dimensions.get('window').height/25,
        marginTop: Dimensions.get('window').height/95,
        backgroundColor: '#ABCF3B',
    },
    activityForth: {
        flexDirection: 'row',
        height: Dimensions.get('window').height/30,
        backgroundColor: '#123217',
    },
    activityForthIcon:{
        padding: Dimensions.get('window').height/120, 
        textAlign: 'center', 
        fontWeight: 'bold'
    },
    activityForthText:{
        marginLeft: Dimensions.get('window').width/80,
        color: 'white'
    },
    activityfifth: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: '#ABCF3B',
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
    btnFontSize: {
        fontWeight: "bold",
    },
    btnColor: {
        color: 'white',
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
});

export default styles;