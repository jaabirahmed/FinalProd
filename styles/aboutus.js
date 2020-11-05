import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    heading: {
        marginTop: 20,
        marginHorizontal: 30,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: '#3b5b7e',
        height: Dimensions.get('window').height / 25,
        width: Dimensions.get('window').height / 2,   //350
    },
    headingText: {
        marginHorizontal: 85,
        color: 'white',
        fontWeight: 'bold'
    },
    Logo: {
        overflow: 'hidden',
        backgroundColor: 'white',
        alignSelf: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop: 10,

    },
    Subview1: {
        padding: 10
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