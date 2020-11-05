import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    Dimensions, 
    ImageBackground
} from 'react-native';
import styles from '../styles/homePage';
import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {
    // static navigationOptions = {
    //     headerTitle: () => {
    //         return (
    //             <View style={styles.headerViewStyle}>
    //                 <Text style={styles.headerTextStyle}>
    //                     As-Salamu Alaykum Wa-Rahmatu illahi Wa-Barakatuhu
    //                 </Text >
    //             </View>
    //         )
    //     },
    // };
    render() {
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
                <View style={styles.activitySecondHeader}>
                    <Text >HOME - Dashboard (Top 3)</Text>
                </View>
                <View style={styles.activitySecond}>
                    <View style={styles.activitySecondSubHeader}>
                        <Text style={styles.activitySecondSubHeaderText}>No of times recitations completed</Text>
                    </View>
                    <View style={styles.activitySubSecond}>
                        <View style={styles.activitySub1Second}>
                            <Text>Quran - 3</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/quran.png')}></Image>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Text>Surah Yasin - 10</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/yasin.png')}></Image>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Text>Surah Ar-Rahman</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/rahman.png')}></Image>
                        </View>
                    </View>
                    <View style={styles.activitySecondSubHeader}>
                        <Text style={styles.activitySecondSubHeaderText}>No of times Namaz was offered</Text>
                    </View>
                    <View style={styles.activitySubSecond}>
                        <View style={styles.activitySub1Second}>
                            <Text>Farayaz - 50</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/farayaz.png')}></Image>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Text>Tahajud - 10</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/tahajud.png')}/>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Text>Salat-ul-Tasbee</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/salat-ul-tasbee.png')}></Image>
                        </View>
                    </View>
                    <View style={styles.activitySecondSubHeader}>
                        <Text style={styles.activitySecondSubHeaderText}>No of times Zikr completed</Text>
                    </View>
                    <View style={styles.activitySubSecond}>
                        <View style={styles.activitySub1Second}>
                            <Text>First Kalimah - 150</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/kalimah.png')}></Image>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Text>Darood - 200</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/darood.png')}></Image>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Text>Astagfar - 320</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/astagfar.png')}></Image>
                        </View>
                    </View>
                    <View style={styles.activitySecondSubHeader}>
                        <Text style={styles.activitySecondSubHeaderText}>No of days fasting Kept, No of times Umrah/hajj performed</Text>
                    </View>
                    <View style={styles.activitySubSecond}>
                        <View style={styles.activitySub1Second}>
                            <Text>Ramadan Fast - 30</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/ramadan.png')}></Image>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Text>Nafil Fast - 80</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/nafil.png')}></Image>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Text>Umrah -2, Hajj -1</Text>
                            <Image style={styles.homeImage} source={require('../assets/HomePageIcons/umrah.png')}></Image>
                        </View>
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
            //</View>
        );
    }
}

export default HomeScreen;