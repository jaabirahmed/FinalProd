import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import styles from '../styles/myRewards';
import { Ionicons } from '@expo/vector-icons';

class MyRewards extends React.Component {
    static navigationOptions = {
        headerTitle: () => {
            return (
                <View style={styles.headerViewStyle}>
                    <Text style={styles.headerTextStyle}>
                        As-Salamu Alaykum Wa-Rahmatu illahi Wa-Barakatuhu
                    </Text >
                </View>
            )
        },
    };
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
                <View style={styles.activitySecond}>
                    <View style={styles.activitySubSecond}>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>#96 Yasin - 100</Text>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>#106 Quraysh - 10</Text>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>Spelling Bee - 100</Text>
                        </View>
                    </View>
                    <View style={styles.activitySubSecond}>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>#105 Al-Feel - 10</Text>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>#114 Naas - 10</Text>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>Volunteer Event - 40</Text>
                        </View>
                    </View>
                    <View style={styles.activitySubSecond}>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>#105 Al-Feel - 10</Text>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>#114 Naas - 10</Text>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>Volunteer Event - 40</Text>
                        </View>
                    </View>
                    <View style={styles.activitySubSecond}>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>#105 Al-Feel - 10</Text>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>#114 Naas - 10</Text>
                        </View>
                        <View style={styles.activitySub1Second}>
                            <Image style={styles.homeImage} source={require('../assets/yaseen-home.png')}></Image>
                            <Text>Volunteer Event - 40</Text>
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

export default MyRewards;