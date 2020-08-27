import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors'
const MainButton = props =>{
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={{...styles.button,...props.style}}>
                <Text style={{...styles.textButton,...props.style}}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
       textAlign:'center',
       justifyContent:'center'
    },
    textButton: {
        color:'white',
        fontSize: 18
    }
});

export default MainButton;