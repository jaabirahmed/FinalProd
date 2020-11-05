import React, { Component } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Button,
} from "react-native";

class TestAPI extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            name: ''
        }
    }
    updateValue(text, feild) {
        if (feild == 'name') {
            this.setState({
                name: text,
            })
        } else if (feild == 'email') {
            this.setState({
                email: text,
            })
        }
    }

    submit() {
        let collection = {}
        collection.email = this.state.name,
            collection.password = this.state.email
        console.log(collection);

        fetch('https://ebadge-api.mindstacksolutions.com/api/login', {
            method: 'POST', // or 'PUT'
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(collection),
        }).then(response => response.json()).then(data => {
                console.log('Success:', data);
            }).catch((error) => {
                console.error('Error:', error);
            });
    }
    render() {
        return (
            <View style={styles.screen}>
                <TextInput placeholder="Name"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'name')}
                />
                <TextInput placeholder="Email"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'email')}
                />
                <TouchableOpacity style={styles.btn} onPress={() => this.submit()}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        elevation: 20,
        alignItems: 'center',
        padding: 40,
        margin: 40,
        justifyContent: 'center'
    },
    input: {
        borderBottomWidth: 4,
        borderBottomColor: 'black',
        width: 300,
        margin: 30,
        fontSize: 20
    },
    btn: {
        backgroundColor: "green",
        width: 300,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 15
    }
});

export default TestAPI;