import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Image } from 'react-native';
import Colors from './constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/checkoutPage';

function CheckoutScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.activityMain}>
                    <View>
                        <Image style={styles.userImage} source={require('../assets/user.png')}></Image>
                    </View>
                    <View style={styles.activitysubMain}>
                        <Text style={styles.activityMainText1}>JAABIR AHMED</Text>
                        <Text style={styles.activityMainText2}>AR Rahmaan</Text>
                    </View>
                    <View style={styles.activitysubMain}>
                        <Text style={styles.activityMainText1}>Available Points: 5680</Text>
                        <Text style={styles.activityMainText2}>Total Points Rewarded: 8200 </Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.activityMainStars}><Ionicons name="ios-star" size={Dimensions.get('window').width > 400 ? 20 : 14} color="#BAA830" />5</Text>
                            <Text style={styles.activityMainStars2}><Ionicons name="ios-star" size={Dimensions.get('window').width > 400 ? 20 : 14} color="#C6363B" />8</Text>
                            <Text style={styles.activityMainStars2}><Ionicons name="ios-star" size={Dimensions.get('window').width > 400 ? 20 : 14} color="#4E4E4E" />3</Text>
                        </View>
                        <Text style={[styles.activityMainStars, { fontSize: Dimensions.get('window').width > 400 ? 12 : 10, }]}>Level: 5</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 1 }}>
                <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                </View>
            </View>

            <View style={styles.activitySecondHeader}>
                <View>
                    <Text style={styles.activitySecondHeaderText1}>IQRA - Emporium</Text>
                </View>
            </View>

            <View style={{ marginTop: 1 }}>
                <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                </View>
            </View>


            <View style={styles.activitySecond}>
                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Shopping Cart Items</Text>
                </View>
            </View>

            <View style={styles.activitySecondHeader}>
                <View>
                    <Text style={styles.activitySecondHeaderText1}>Item Details</Text>
                </View>
                <View>
                    <Text style={styles.QuantityText}>Qty: </Text>
                </View>
                <View>
                    <Text style={styles.PointsText}>Points</Text>
                </View>
                <View>
                    <Text style={sttyles.TotalPointsText}>Total Points</Text>
                </View>
            </View>


            <View style={styles.activitySubSecond}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                    </View>
                    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                        <Text>Item Name</Text>
                        <Text>Item Description</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>200</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>200</Text>
                    </View>
                </View>
            </View>

            <View style={styles.activitySubSecond}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                    </View>
                    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                        <Text>Item Name</Text>
                        <Text>Item Description</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>200</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>200</Text>
                    </View>
                </View>
            </View>

            <View style={styles.activitySubSecond}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                    </View>
                    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                        <Text>Item Name</Text>
                        <Text>Item Description</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>200</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>200</Text>
                    </View>
                </View>
            </View>

            <View style={styles.activitySecondHeader}>
                <View>
                    <Text style={styles.TotalText}>Total</Text>
                </View>
                <View>
                    <Text style={styles.TotalQuantityText}>4</Text>
                </View>
                <View>
                    <Text style={styles.GrandTotalText}>300</Text>
                </View>
            </View>


            <View style={styles.emporiumItemsButton}>
                <Button title='Place Order' color='#3b5b7e' onPress={() => { }} ></Button>
            </View>



            <View style={styles.footerView}>
                <View style={styles.footersecondView}>
                    <Text numberOfLines={3} style={styles.footerText}>
                        Hadith:
                      <Text style={styles.footerText1}>
                            The Prophet said: “The best of charity is when a Muslim man gains knowledge, then he teaches it to his Muslim brother”
                      </Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default CheckoutScreen;


