import React from 'react';
import { View, Text, Button } from 'react-native';

function FamilyScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Family Screen</Text>
            <Text>TO GO BACK</Text>
            <Button title='Click Me' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default FamilyScreen;