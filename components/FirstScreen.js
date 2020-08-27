import React from 'react';
import {Text, View, Button} from 'react-native';

export default class FirstScreen extends React.Component{
    static navigationOptions = {
        title:'First Screen',
    };
    render(){
        const { navigate } = this.props.navigation;

        return(
            <View>
                <Text>First Screen</Text>
                <Button 
                onPress={() => navigate(
                    'Second', { name: 'Jane' }
                )}
                title="Go to second Screen"/>
            </View>
        );
    }
}