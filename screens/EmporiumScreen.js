import React from 'react';
import { Text, Image, View, Button, Dimensions, ScrollView, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import styles from '../styles/EmporiumPage';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

export function EmporiumScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Emporium Screen !</Text>
        </View>
    );
}


function Emporium(props) {
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
                <View>
                    <Text style={styles.activitySecondHeaderText2}>Search: </Text>
                </View>
                <View>
                    <Text style={styles.activitySecondHeaderText3}>Sort: Low To High Point</Text>
                </View>
            </View>

            <View style={{ marginTop: 1 }}>
                <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                </View>
            </View>


            <View style={styles.activitySecond}>
                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Islamic</Text>
                </View>

                <View style={styles.activitySubSecond}>
                    <TouchableOpacity onPress={(props) => {
                        props.nav.navigate('ProductDetailsScreen');
                    }}>
                    <View style={styles.activitySub1Second}>
                        <Text>Quran - 3</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/quran.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    </TouchableOpacity>

                    <View style={styles.activitySub1Second}>
                        <Text>Surah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/yasin.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>

                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>

                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>

                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>

                </View>


                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>IQRA Brand</Text>
                </View>

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Farayaz</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/farayaz.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Tahajud</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/tahajud.png')} />
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Mens</Text>
                </View>

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>First Kalimah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/kalimah.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Darood - 200</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/darood.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Women</Text>
                </View>

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>80 pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Kids</Text>
                </View>

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>

                <View style={styles.greenBar}></View>

                <View style={styles.emporiumItemsButton}>
                    <Button title='More Emporium Items' color='#3b5b7e' onPress={() => { }} ></Button>
                </View>

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

function Islamic() {
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
                <View>
                    <Text style={styles.activitySecondHeaderText2}>Search: </Text>
                </View>
                <View>
                    <Text style={styles.activitySecondHeaderText3}>Sort: Low To High Point</Text>
                </View>
            </View>

            <View style={{ marginTop: 1 }}>
                <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                </View>
            </View>


            <View style={styles.activitySecond}>
                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Islamic</Text>
                </View>

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Quran - 3</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/quran.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/yasin.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                {/*  <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>IQRA Brand</Text>
                </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Farayaz</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/farayaz.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Tahajud</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/tahajud.png')} />
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Mens</Text>
                </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>First Kalimah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/kalimah.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Darood - 200</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/darood.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Women</Text>
                </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>80 pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Kids</Text>
                </View>
 */}
                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>

                <View style={styles.greenBar}></View>

                <View style={styles.emporiumItemsButton}>
                    <Button title='More Emporium Items' color='#3b5b7e' onPress={() => { }} ></Button>
                </View>

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

function Men() {
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
                <View>
                    <Text style={styles.activitySecondHeaderText2}>Search: </Text>
                </View>
                <View>
                    <Text style={styles.activitySecondHeaderText3}>Sort: Low To High Point</Text>
                </View>
            </View>

            <View style={{ marginTop: 1 }}>
                <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                </View>
            </View>


            <View style={styles.activitySecond}>
                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Men</Text>
                </View>

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Quran</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/quran.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/yasin.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>IQRA Brand</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Farayaz</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/farayaz.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Tahajud</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/tahajud.png')} />
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Mens</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>First Kalimah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/kalimah.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Darood - 200</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/darood.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Women</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>80 pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                {/*  <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Kids</Text>
            </View>
*/}
                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>

                <View style={styles.greenBar}></View>

                <View style={styles.emporiumItemsButton}>
                    <Button title='More Emporium Items' color='#3b5b7e' onPress={() => { }} ></Button>
                </View>

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

function Women() {
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
                <View>
                    <Text style={styles.activitySecondHeaderText2}>Search: </Text>
                </View>
                <View>
                    <Text style={styles.activitySecondHeaderText3}>Sort: Low To High Point</Text>
                </View>
            </View>

            <View style={{ marginTop: 1 }}>
                <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                </View>
            </View>


            <View style={styles.activitySecond}>
                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Women</Text>
                </View>

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Quran - 3</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/quran.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/yasin.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>IQRA Brand</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Farayaz</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/farayaz.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Tahajud</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/tahajud.png')} />
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Mens</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>First Kalimah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/kalimah.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Darood - 200</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/darood.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                {/*  <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Women</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>80 pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                {/*  <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Kids</Text>
            </View>
*/}
                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>

                <View style={styles.greenBar}></View>

                <View style={styles.emporiumItemsButton}>
                    <Button title='More Emporium Items' color='#3b5b7e' onPress={() => { }} ></Button>
                </View>

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

function Kids() {
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
                <View>
                    <Text style={styles.activitySecondHeaderText2}>Search: </Text>
                </View>
                <View>
                    <Text style={styles.activitySecondHeaderText3}>Sort: Low To High Point</Text>
                </View>
            </View>

            <View style={{ marginTop: 1 }}>
                <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                </View>
            </View>


            <View style={styles.activitySecond}>
                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>Kids</Text>
                </View>

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Quran - 3</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/quran.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/yasin.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                {/*  <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>IQRA Brand</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Farayaz</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/farayaz.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Tahajud</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/tahajud.png')} />
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Mens</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>First Kalimah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/kalimah.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Darood - 200</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/darood.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                {/*  <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Women</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>80 pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Kids</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>

                <View style={styles.greenBar}></View>

                <View style={styles.emporiumItemsButton}>
                    <Button title='More Emporium Items' color='#3b5b7e' onPress={() => { }} ></Button>
                </View>

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

function IQRA_Brand() {
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
                <View>
                    <Text style={styles.activitySecondHeaderText2}>Search: </Text>
                </View>
                <View>
                    <Text style={styles.activitySecondHeaderText3}>Sort: Low To High Point</Text>
                </View>
            </View>

            <View style={{ marginTop: 1 }}>
                <View style={{ marginVertical: 5, padding: 2, backgroundColor: 'grey', width: 500, height: Dimensions.get('window').height / 300 }}>
                </View>
            </View>


            <View style={styles.activitySecond}>
                <View style={styles.activitySecondSubHeader}>
                    <Text style={styles.activitySecondSubHeaderText}>IQRA Brand</Text>
                </View>

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Quran - 3</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/quran.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/yasin.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>IQRA Brand</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Farayaz</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/farayaz.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Tahajud</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/tahajud.png')} />
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Salat</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        <Text>800 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Mens</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>First Kalimah</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/kalimah.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Darood - 200</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/darood.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Astagfar - 320</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                {/* <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Women</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>80 pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>


                {/*  <View style={styles.activitySecondSubHeader}>
                <Text style={styles.activitySecondSubHeaderText}>Kids</Text>
            </View> */}

                <View style={styles.activitySubSecond}>
                    <View style={styles.activitySub1Second}>
                        <Text>Ramadan Fast - 30</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        <Text>500 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Nafil Fast - 80</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Umrah -2, Hajj -1</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        <Text>40 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>80 Pts</Text>
                    </View>
                    <View style={styles.activitySub1Second}>
                        <Text>Surah Ar-Rahman</Text>
                        <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        <Text>100 Pts</Text>
                    </View>
                </View>

                <View style={styles.greenBar}></View>

                <View style={styles.emporiumItemsButton}>
                    <Button title='More Emporium Items' color='#3b5b7e' onPress={() => { }} ></Button>
                </View>

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
const EmporiumStack = createStackNavigator();
const EmporiumStackScreen = () => (
    <EmporiumStack.Navigator screenOptions={{ headerShown: false }}>
        <EmporiumStack.Screen name="Emporium" component={Emporium} />
    </EmporiumStack.Navigator>
);

const IslamicStack = createStackNavigator();
const IslamicStackScreen = () => (
    <IslamicStack.Navigator screenOptions={{ headerShown: false }}>
        <IslamicStack.Screen name="Islamic" component={Islamic} />
    </IslamicStack.Navigator>
);

const MenStack = createStackNavigator();
const MenStackScreen = () => (
    <MenStack.Navigator screenOptions={{ headerShown: false }}>
        <MenStack.Screen name="Men" component={Men} />
    </MenStack.Navigator>
);

const WomenStack = createStackNavigator();
const WomenStackScreen = () => (
    <WomenStack.Navigator screenOptions={{ headerShown: false }}>
        <WomenStack.Screen name="Women" component={Women} />
    </WomenStack.Navigator>
);

const KidsStack = createStackNavigator();
const KidsStackScreen = () => (
    <KidsStack.Navigator screenOptions={{ headerShown: false }}>
        <KidsStack.Screen name="Kids" component={Kids} />
    </KidsStack.Navigator>
);

const IQRA_BrandStack = createStackNavigator();
const IQRA_BrandStackScreen = () => (
    <IQRA_BrandStack.Navigator screenOptions={{ headerShown: false }}>
        <IQRA_BrandStack.Screen name="IRQA Brand" component={IQRA_Brand} />
    </IQRA_BrandStack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();
export default function EmporiumTabs() {
    return (
        <Tab.Navigator
            /* initialRouteName="Islamic" */
            // activeColor="black"
            activeColor="black"
            inactiveColor={Colors.accent}
            barStyle={{ backgroundColor: Colors.primary }}
        /* style={{ backgroundColor: 'tomato' }} */
        >
            <Tab.Screen
                name="Emporium"
                component={EmporiumStackScreen}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: 'Emporium',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Islamic"
                component={IslamicStackScreen}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: 'Islamic',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Men"
                component={MenStackScreen}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: 'Men',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Women"
                component={WomenStackScreen}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: 'Women',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Kids"
                component={KidsStackScreen}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: 'Kids',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="gamepad-variant" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="IQRA_Brand"
                component={IQRA_BrandStackScreen}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: 'IQRA Brand',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-outline" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

/* export default function App() {
    return (
        <NavigationContainer>
            <EmporiumScreen />
            <EmporiumTabs />
        </NavigationContainer>
    );
} */

/* export default EmporiumScreen; */