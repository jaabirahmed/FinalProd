import React from 'react';
import { View, Text, Button } from 'react-native';

function IT_SolutionsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>IT_Solutions Screen </Text>
            <Text>TO GO BACK</Text>
            <Button title='Click Me' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default IT_SolutionsScreen;