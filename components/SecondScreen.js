import React from 'react';
import {Text, View, Button} from 'react-native';

export default class SecondScreen extends React.Component{
    static navigationOptions = ({navigation})=>{
        return {
            title: navigation.getParam('name'),
        };
    };
    render(){
        const {navigate, state}=this.props.navigation;
        return(
            <View>

                <Text>Hello {state.params.name}</Text>
                <Text>Hello {state.params.email}</Text>
                <Button
                    title="Go to home screen"
                    onPress={() => navigate('First')}
                />

            </View>
        );
    }
}