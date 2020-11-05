import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import Colors from '../constants/Colors';
class HomePage extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home Page",
        };
    };
    render() {
        const { navigate, state } = this.props.navigation;
        return (
            <View style={{ shadowColor: 'black', backgroundColor: 'white', elevation: 20, padding: 30, marginTop: 30 }}>
                <View style={styles.curve}>
                    <Image name="save" style={styles.img} source={{ uri: state.params.params1.photo }} />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.text}><Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>Name:</Text> {state.params.params1.name}</Text>
                    <Text style={styles.text}><Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>Email:</Text> {state.params.params1.email}</Text>
                    <Text style={styles.text}><Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>Designation:</Text> {state.params.params1.designation}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
    text: {
        margin: 6,
        fontSize: 18,
        padding: 10,
        marginLeft: 20
    },
    curve: {
        paddingTop: 10,
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
    inputView: {
        marginTop: 30,
        paddingLeft: 10
    },
    ButtonContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.accent,
        height: 40,
        width: 350,
        borderRadius: 10,
    },
    setFontSize: {
        fontWeight: "bold",
    },
    setColorRed: {
        color: 'white',
    }
});

export default HomePage;