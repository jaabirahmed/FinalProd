import * as React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, ScrollView, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Icon, Avatar, Caption, Paragraph, Title } from 'react-native-paper';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList, } from 'react-native-gesture-handler';
import MyRewards from '../screens/MyRewards';
import Settings from '../screens/Settings';

import styles from '../styles/profile';


function ProfileScreen(props) {
    return (
        <ScrollView>
            <View style={styles.MainContainer}>
                <View style={styles.ImageContainer}>
                    <Avatar.Image
                        source={{
                            uri: 'https://unsplash.com/photos/27QcqVqgVg4'
                        }}
                        size={80}
                    />
                </View>

                <View style={styles.Name}>
                    <Title style={styles.title}>Jaabir Ahmed</Title>
                    <Caption style={styles.caption}>ID: IR-000001</Caption>
                </View>
            </View>


            <View style={{ marginTop: 20 }}>
                <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                </View>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.PointsContainerCaption}>My Achievements</Text>
            </View>

            <View style={{ marginHorizontal: 10 }}>
                <View style={styles.PointsContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.PointsContainerCaption}>Points Balance   : </Text>
                        <View style={styles.PointsContainerSubView}>
                            <Text style={styles.PointsContainerText} >568</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.PointsContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.PointsContainerCaption}>Points Earned     : </Text>
                        <View style={styles.PointsContainerSubView}>
                            <Text style={styles.PointsContainerText} >8200</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.StarContainer}>
                <Text style={styles.StarText}>Stars                     :</Text>
                <View style={styles.StarContainerSubView1}>
                    <Ionicons name='md-star' size={25} color='yellow' />
                    <View style={styles.StarContainerSubView2}>
                        <Text style={styles.StarContainerText} >5</Text>
                    </View>
                </View>
                <View style={styles.StarContainerSubView1}>
                    <Ionicons name='md-star' size={25} color='red' />
                    <View style={styles.StarContainerText}>
                        <Text style={styles.StarContainerText}>8</Text>
                    </View>
                </View>
                <View style={styles.StarContainerSubView1}>
                    <Ionicons name='md-star' size={25} color='black' />
                    <View style={styles.StarContainerText}>
                        <Text style={styles.StarContainerText}>3</Text>
                    </View>
                </View>
            </View>

            <View style={styles.LevelView}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Level                     : </Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 4 }}>Level 5</Text>
                </View>
            </View>

            <View style={{ marginTop: 10 }}>
                <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                </View>
            </View>

            <View>
                <TouchableNativeFeedback onPress={(props) => {
                    props.nav.navigate('Settings');
                }}>
                    <View style={styles.MenuView}>
                        <Ionicons name='md-person' size={25} color='#3b5b7e' />
                        <View style={styles.MenuSubView}>
                            <Text style={styles.MenuSubViewText}>Profile</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>

                <View style={{ marginTop: 10 }}>
                    <View style={{ marginVertical: 5, padding: 1, backgroundColor: 'black', width: 500, height: Dimensions.get('window').height / 300 }}>
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    props.nav.navigate('');
                }}>
                    <View style={styles.MenuView}>
                        <Ionicons name='md-archive' size={25} color='#3b5b7e' />
                        <View style={styles.MenuSubView}>
                            <Text style={styles.MenuSubViewText}>My Activities</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 10 }}>
                    <View style={{ marginVertical: 5, padding: 1, backgroundColor: 'black', width: 500, height: Dimensions.get('window').height / 300 }}>
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    props.nav.navigate('');
                }}>
                    <View style={styles.MenuView}>
                        <Ionicons name='md-globe' size={25} color='#3b5b7e' />
                        <View style={styles.MenuSubView}>
                            <Text style={styles.MenuSubViewText}>My Family </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 10 }}>
                    <View style={{ marginVertical: 5, padding: 1, backgroundColor: 'black', width: 500, height: Dimensions.get('window').height / 300 }}>
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    props.nav.navigate('');
                }}>
                    <View style={styles.MenuView}>
                        <Ionicons name='md-heart' size={25} color='#3b5b7e' />
                        <View style={styles.MenuSubView}>
                            <Text style={styles.MenuSubViewText}>My Rewards</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 10 }}>
                    <View style={{ marginVertical: 5, padding: 1, backgroundColor: 'black', width: 500, height: Dimensions.get('window').height / 300 }}>
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    props.nav.navigate('');
                }}>
                    <View style={styles.MenuView}>
                        <Ionicons name='md-cart' size={25} color='#3b5b7e' />
                        <View style={styles.MenuSubView}>
                            <Text style={styles.MenuSubViewText}>My Cart</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 10 }}>
                    <View style={{ marginVertical: 5, padding: 1, backgroundColor: 'black', width: 500, height: Dimensions.get('window').height / 300 }}>
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    props.nav.navigate('');
                }}>
                    <View style={styles.MenuView}>
                        <Ionicons name='md-settings' size={25} color='#3b5b7e' />
                        <View style={styles.MenuSubView}>
                            <Text style={styles.MenuSubViewText}>Settings</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 10 }}>
                    <View style={{ marginVertical: 5, padding: 1, backgroundColor: 'black', width: 500, height: Dimensions.get('window').height / 300 }}>
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    props.nav.navigate('');
                }}>
                    <View style={styles.MenuView}>
                        <Ionicons name='md-log-out' size={25} color='#3b5b7e' />
                        <View style={styles.MenuSubView}>
                            <Text style={styles.MenuSubViewText}>Logout</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 10 }}>
                    <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                    </View>
                </View>

            </View>


        </ScrollView>
    );
}

export default ProfileScreen;


