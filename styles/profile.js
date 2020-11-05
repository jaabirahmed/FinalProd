import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    MainContainer: {
        flexDirection: 'row'
    },
    ImageContainer: {
        flex: 1,
        marginTop: 20,
        marginLeft: Dimensions.get('window').width / 20,
    },
    Name: {
        marginRight: Dimensions.get('window').width / 3,
        marginTop: Dimensions.get('window').height / 35,
        flexDirection: 'column'
    },
    title: {
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 20,
        //lineHeight: 14,
        fontWeight: 'bold'
    },
    PointsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5
    },
    PointsContainerSubView: {
        flexDirection: 'column',
        marginRight: 10,
        marginVertical: -6
    },
    PointsContainerCaption: {
        fontWeight: 'bold',
        fontSize: 18
    },
    PointsContainerText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal: 5,
        marginTop: 6
    },
    StarContainer: {
        marginTop: 8,
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    StarContainerSubView1: {
        flexDirection: 'row',
        marginTop: 6,
        marginLeft: 4,
        //marginHorizontal: 15
    },
    StarContainerSubView2: {
        flexDirection: 'column',
        marginRight: 10,
        marginVertical: -1
    },
    StarContainerText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 5
    },
    StarText: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 18
    },
    LevelView: {
        marginTop: 8,
        flexDirection: 'row',
        marginHorizontal: 15
    },
    LevelText: {
        alignItems: 'center',
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    MenuView: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15
    },
    MenuSubView: {
        flexDirection: 'column',
        marginLeft: 10
    },
    MenuSubViewText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 5
    }
});

export default styles;