import React from 'react';
import { View, Text, Button } from 'react-native';

function BlankScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Blank Screen</Text>
            <Text>ARE YOU READY ... !</Text>
            <Button title='Click Me' onPress={() => navigation.navigate('AppDrawer')} />
        </View>
    );
}

export default BlankScreen;