import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { HeaderButton, Item } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeaderButton = props => {
    return (<HeaderButton {...props}
        IconComponent={Ionicons}
        iconSize={28}
        color={Platform.OS === 'android' ? 'white' : 'black'}
    />
    );
};

export default CustomHeaderButton;