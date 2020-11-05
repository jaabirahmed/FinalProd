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
        flex: 1,
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
        flex: 1,
    },
    activitySubSecond: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    activitySub1Second: {
        alignItems:'center',
        margin:Dimensions.get('window').height/95,
    },
    homeImage: {
        width: Dimensions.get('window').width/4,
        height: Dimensions.get('window').height/8,
    },
    footerView:{
        width: Dimensions.get('window').width/1, 
    },
    footersecondView:{
        backgroundColor: Colors.primary, 
        height: Dimensions.get('window').height/10,
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