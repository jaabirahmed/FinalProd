import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { HeaderButton, Item } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import ProfileScreen from '../screens/ProfileScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';

const CustomHeaderComponent = props => {
    return (
        <SafeAreaView style={styles.MainView}>
            <View style={styles.SubView1}>
                <Text onPress={() => props.nav.openDrawer()}><Ionicons name="md-menu" size={Dimensions.get('window').width > 400 ? 35 : 32} color='black' /></Text>
            </View>
            <View style={styles.SubView2}>
                <Text style={styles.SubView2Text}>IQRA Rewards</Text>
            </View>
            <View style={styles.SubView3}>
                <Ionicons
                    name="md-search"
                    size={Dimensions.get('window').width > 400 ? 35 : 32}
                    onPress={(navigation) => {
                        props.nav.navigate('ProfileScreen')
                    }}
                    color='black' />

            </View>
            <TouchableOpacity
                style={{ paddingHorizontal: 10, marginVertical: 28 }}
                onPress={(navigation) => {
                    props.nav.navigate('ProfileScreen');
                }} >
                <Avatar.Image
                    source={{ uri: 'https://api.adorable.io/avatars/80/abott@adorable.png' }}
                    size={30}
                />
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    MainView: {
        flexDirection: 'row',
        height: Dimensions.get('window').height / 8,
        borderWidth: 1,
        backgroundColor: Colors.primary,
        paddingTop: Dimensions.get('window').height / 50,
        elevation: 0.5
    },
    SubView1: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingTop: 20,
    },
    SubView2: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: Dimensions.get('window').width / 80,
        paddingTop: Dimensions.get('window').height / 50,
    },
    SubView3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10,
        paddingTop: 20
    },
    SubView2Text: {
        fontSize: Dimensions.get('window').width > 400 ? 20 : 16,
        fontWeight: 'bold'
    }
});
export default CustomHeaderComponent;

