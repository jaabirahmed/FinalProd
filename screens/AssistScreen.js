import React from 'react';
import { View, Text, Button } from 'react-native';

function AssistScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Assist Screen</Text>
            <Text>TO GO BACK</Text>
            <Button title='Click Me' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default AssistScreen;