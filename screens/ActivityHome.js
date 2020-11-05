import React from 'react';
import {
    Text,
    View,
    Image,
    Picker,
    UIManager,
    LayoutAnimation,
    Platform,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import styles from '../styles/activityHomePage';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ExpandableItemComponent from '../components/ExpandableItemComponent';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.state = {
            PickerSelectedVal: '',
            listDataSource: CONTENT
        }
    }

    updateLayout = index => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...this.state.listDataSource];
        array[index]['isExpanded'] = !array[index]['isExpanded'];
        this.setState(() => {
            return {
                listDataSource: array,
            };
        });
    };

    static navigationOptions = {
        headerTitle: () => {
            return (
                <View style={styles.headerViewStyle}>
                    <Text style={styles.headerTextStyle}>
                        IQRA REWARDS
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
                    <View style={styles.activitySecond}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.activitySubSecond}>
                                <Text style={styles.activitySecondIcons}><Ionicons name="ios-add" size={Dimensions.get('window').width > 400 ? 20 : 14} color="black" /></Text>
                                <Text style={styles.activitySecondIcons}><Ionicons name="ios-remove" size={Dimensions.get('window').width > 400 ? 20 : 14} color="black" /></Text>
                            </View>
                            <View style={styles.activitySub2Second}>
                                <Text style={styles.activitySecondText}>My Activities</Text>
                                <Text style={styles.activitySecondText}>My Family</Text>
                                <Text style={styles.activitySecondText}>To Review</Text>
                            </View>
                            <View style={styles.activitySub3Second}>
                                <Text style={[styles.activitySecondText, { backgroundColor: '#395B7D' }]}>To Review</Text>
                            </View>
                        </View>
                        <View style={styles.activitySub4Second}>
                            <Picker selectedValue={this.state.PickerSelectedVal}
                                onValueChange={(itemValue, itemIndex) => { this, this.setState({ PickerSelectedVal: itemValue }) }}
                            >
                                <Picker.Item label="Muḥarram 1441" value="Muḥarram" />
                                <Picker.Item label="Ṣafar 1441" value="Ṣafar" />
                                <Picker.Item label="Rabial-awwal 1441" value="Rabial-awwal" />
                                <Picker.Item label="Ramadan 1441" value="ramadan" />
                            </Picker>
                        </View>
                        <View style={styles.activityThird}>
                            <Text style={[styles.activitySub4SecondText, { width: Dimensions.get('window').width / 4 }]}> Activities </Text>
                            <Text style={[styles.activitySub4SecondText, { width: Dimensions.get('window').width / 40, marginLeft: Dimensions.get('window').width / 12 }]}> | </Text>
                            <Text style={[styles.activitySub4SecondText, { width: Dimensions.get('window').width / 12, marginLeft: Dimensions.get('window').width / 8 }]}>Level </Text>
                            <Text style={[styles.activitySub4SecondText, { width: Dimensions.get('window').width / 40, marginLeft: Dimensions.get('window').width / 15 }]}> | </Text>
                            <Text style={[styles.activitySub4SecondText, { width: Dimensions.get('window').width / 4, textAlign: 'center' }]}>Status</Text>
                        </View>
                        <View style={styles.activityForth}>
                            <Text style={styles.activityForthIcon}><Ionicons name="ios-remove" size={14} color="white" /></Text>
                            <Text style={styles.activityForthText}>Islamic</Text>
                        </View>
                        <View>
                            {this.state.listDataSource.map((item, key) => (
                                <ExpandableItemComponent
                                    key={item.category_name}
                                    onClickFunction={this.updateLayout.bind(this, key)}
                                    item={item}
                                    modalOpen={(item1) => { console.log(item1) }}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', paddingBottom: Dimensions.get('window').height/9.6, }}>
                        <TouchableOpacity style={styles.ButtonContainer} onPress={() => { }} >
                            <Text style={[styles.btnFontSize, styles.btnColor]}>Submit</Text>
                        </TouchableOpacity>
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


const CONTENT = [
    {
        isExpanded: false,
        category_name: 'Basics: (Memorize) ',
        subcategory: [
            {
                id: 1,
                val1: "Five Kalimah's",
                val2: '1',
                val3: 'A'
            },
            {
                id: 2,
                val1: 'Sana Subhanakala',
                val2: '1',
                val3: 'R'
            },
            {
                id: 3,
                val1: 'Athiyaathu',
                val2: '1',
                val3: 'S',
            },
            {
                id: 4,
                val1: 'Darood Sharif',
                val2: '1',
                val3: 'S',
            }
        ],
    },
    {
        isExpanded: false,
        category_name: 'Topics: (Present) ',
        subcategory: [
            {
                id: 1,
                val1: "Five Kalimah's",
                val2: '1',
                val3: 'A',
            },
            {
                id: 2,
                val1: 'Sana Subhanakala',
                val2: '1',
                val3: 'R',
            },
            {
                id: 3,
                val1: 'Athiyaathu',
                val2: '1',
                val3: 'S',
            },
            {
                id: 4,
                val1: 'Darood Sharif',
                val2: '1',
                val3: 'S',
            }
        ],
    },
    {
        isExpanded: false,
        category_name: "Quran Popular Surah's : (Recite) ",
        subcategory: [
            {
                id: 1,
                val1: "Five Kalimah's",
                val2: '1',
                val3: 'A',
            },
            {
                id: 2,
                val1: 'Sana Subhanakala',
                val2: '1',
                val3: 'R',
            },
            {
                id: 3,
                val1: 'Athiyaathu',
                val2: '1',
                val3: 'S',
            },
            {
                id: 4,
                val1: 'Darood Sharif',
                val2: '1',
                val3: 'S',
            }
        ],
    },
    {
        isExpanded: false,
        category_name: 'Namaz: (Perform) ',
        subcategory: [
            {
                id: 1,
                val1: "Fajr",
                val2: '29',
                val3: '30',
                val4: '',
                val5: 'Israq',
            },
            {
                id: 2,
                val1: 'Zohr',
                val2: '29',
                val3: '30',
                val4: '',
                val5: 'Chast',
            },
            {
                id: 3,
                val1: 'Asr',
                val2: '29',
                val3: '30',
                val4: '',
                val5: 'Awabin',
            },
            {
                id: 4,
                val1: 'Magrib',
                val2: '29',
                val3: '30',
                val4: '',
                val5: 'Qaza',
            },
            {
                id: 5,
                val1: 'Isha',
                val2: '29',
                val3: '30',
                val4: '',
                val5: 'Tahajjud',
            },
            {
                id: 6,
                val1: 'Special',
                val2: 'Tawba',
                val3: 'Shukr',
                val4: 'Hajath',
                val5: 'Tasbee',
            }
        ],
    },
    {
        isExpanded: false,
        category_name: 'Zikr: (Multiples of 100 each)',
        subcategory: [
            {
                id: 1,
                val1: "Basic Zikr(Asma-ul-Husna, Tasbee)",
                val2: '29',
            },
            {
                id: 2,
                val1: 'Intermediate Zikr (Darood)',
                val2: '30',
            },
            {
                id: 3,
                val1: 'Advance Zikr (Surah)',
                val2: '0',
            },
            {
                id: 4,
                val1: 'Test',
                val2: '10',
            }
        ],
    },
];

export default MainPage;