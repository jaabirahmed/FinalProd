import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    activityMain: {
        //marginTop: 30,
        flexDirection: 'row',
        padding: Dimensions.get('window').height / 90,
    },
    activitysubMain: {
        flexDirection: 'column',
        marginTop: Dimensions.get('window').height / 95,
    },
    activityMainText1: {
        fontWeight: 'bold',
        paddingLeft: Dimensions.get('window').height / 95,
        fontSize: Dimensions.get('window').width > 400 ? 12 : 10,
    },
    activityMainText2: {
        fontWeight: 'bold',
        paddingLeft: 5,
        fontSize: Dimensions.get('window').width > 400 ? 10 : 8,
    },
    activityMainStars: {
        fontWeight: 'bold',
        paddingLeft: Dimensions.get('window').width / 24,
        fontSize: Dimensions.get('window').width > 400 ? 16 : 12,
    },
    activityMainStars2: {
        fontWeight: 'bold',
        paddingLeft: Dimensions.get('window').height / 95,
        fontSize: Dimensions.get('window').width > 400 ? 16 : 12,
    },
    userImage: {
        width: Dimensions.get('window').width / 10,
        height: Dimensions.get('window').height / 17,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: Dimensions.get('window').height / 90,
    },
    heading: {
        marginTop: Dimensions.get('window').height / 55,
        marginHorizontal: 30,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: '#3b5b7e',
        height: Dimensions.get('window').height / 25,
        width: Dimensions.get('window').height / 2, //350
    },
    headingText: {
        marginHorizontal: 90,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    Logo: {
        resizeMode: 'contain',
        alignSelf: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginTop: 8
    },
    Subview1: {
        padding: 10,
    },
    Subview2: {
        padding: 10,
        marginTop: -10
    },
    Subview3: {
        flexDirection: 'row',
        padding: 10,
        marginTop: -10
    },
    Subview4: {
        padding: 10,
        marginLeft: 65,
        flexDirection: 'column'
    },
    Subview5: {
        paddingHorizontal: 40,
        color: 'white',
        marginBottom: 15,
        height: 60
    },
    SubViewText1: {
        textAlignVertical: 'center',
        fontWeight: 'bold',
        backgroundColor: '#abd03a',
        height: Dimensions.get('window').height / 25
    },
    SubViewText2: {
        fontWeight: 'bold'
    },
    SubViewText3: {
        textAlignVertical: 'center',
        marginHorizontal: 10,
        fontWeight: 'bold',
        backgroundColor: '#abd03a',
        height: Dimensions.get('window').height / 25
    },
    SubViewText4: {
        fontWeight: 'bold',
        marginLeft: -20
    },
});

export default styles;