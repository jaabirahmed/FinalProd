import React from 'react';
import { View, Text, Button, ScrollView, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import styles from '../styles/wisdomPage';

export function WisdomScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Wisdom Screen</Text>
        <Text>TO GO BACK</Text>
        <Button title='Click Me' onPress={() => navigation.navigate('Home')} />
    </View>
    );
}

function Wisdom() {
    return (
        <ScrollView>

            <View style={styles.heading}>
                <Text style={styles.headingText}>IQRA WISDOM</Text>
            </View>

            <View style={styles.Subview1}>
                <Text style={styles.SubViewText1}>#1 Surah Al - Fatiha (Makkah & Medina)</Text>
                <Text style={styles.SubViewText2}>(1) In the name of Allah, The Most Gracious, The Most Merciful.</Text>
                <Text style={styles.SubViewText2}>(2) Praise be to Allah, The Lord of the universe.</Text>
                <Text style={styles.SubViewText2}>(3) The Most Gracious, The Most Merciful.</Text>
                <Text style={styles.SubViewText2}>(4) Master of The Day of Judgment.</Text>
                <Text style={styles.SubViewText2}>(5) You alone we worship, and You alone we ask for help.</Text>
                <Text style={styles.SubViewText2}>(6) Guide us to the straight path.</Text>
                <Text style={styles.SubViewText2}>(7) The path of those on whom You have bestowed Your grace, not of those who earned wrath, nor of those</Text>
            </View>

            <View style={styles.Subview2}>
                <Text style={styles.SubViewText1}>Benefits</Text>
                <Text style={styles.SubViewText2}>- One of the greatest Surahs</Text>
                <Text style={styles.SubViewText2}>- Al-fatiha used for cure</Text>
                <Text style={styles.SubViewText2}>- Necessity in Salat</Text>
            </View>

            <View>
                <Text style={styles.SubViewText3}>Related:</Text>
            </View>
            <View style={styles.Subview3}>
                <View>
                    <Text style={styles.SubViewText2}>- Articles 1. 3. 4. 5</Text>
                    <Text style={styles.SubViewText2}>- Video (Click Here)</Text>
                </View>
            </View>

            <View style={styles.Subview5}>
                <Button title='Close' color='#3b5b7e' onPress={() => { }} ></Button>
        </View>
        </ScrollView>
    );
}

function Main_Topics() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Main Topics!</Text>
        </View>
    );
}

function IQRA_Tube() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>IQRA Tube!</Text>
        </View>
    );
}

function Search() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Search!</Text>
        </View>
    );
}

const WisdomStack = createStackNavigator();
const WisdomStackScreen = () => (
    <WisdomStack.Navigator screenOptions={{ headerShown: false }}>
        <WisdomStack.Screen name="Wisdom" component={Wisdom} />
    </WisdomStack.Navigator>
);

const Main_TopicsStack = createStackNavigator();
const Main_TopicsStackScreen = () => (
    <Main_TopicsStack.Navigator screenOptions={{ headerShown: false }}>
        <Main_TopicsStack.Screen name="Main_Topics" component={Main_Topics} />
    </Main_TopicsStack.Navigator>
);

const IQRA_TubeStack = createStackNavigator();
const IQRA_TubeStackScreen = () => (
    <IQRA_TubeStack.Navigator screenOptions={{ headerShown: false }}>
        <IQRA_TubeStack.Screen name="IQRA_Tube" component={IQRA_Tube} />
    </IQRA_TubeStack.Navigator>
);

const SearchStack = createStackNavigator();
const SearchStackScreen = () => (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
        <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
);


const Tab = createMaterialBottomTabNavigator();
export default function WisdomTabs() {
    return (
        <Tab.Navigator
            activeColor="black"//'black'  
            inactiveColor={Colors.accent}
            barStyle={{ backgroundColor: Colors.accent }}
        >
            <Tab.Screen
                name="Wisdom"
                component={WisdomStackScreen}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: 'Wisdom',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-folder" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Main_Topics"
                component={Main_TopicsStackScreen}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: 'Main Topics',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-calendar" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="IQRA_Tube"
                component={IQRA_TubeStackScreen}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: 'IQRA Tube',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-compass" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchStackScreen}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-search" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
/*
export default function App() {
    return (
        <NavigationContainer>
            <WisdomScreen />
            <MyTabs />
        </NavigationContainer>
    );
}
 */

/* export default WisdomScreen; */


