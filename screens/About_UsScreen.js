import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Icon, Avatar, Caption, Paragraph, Title } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/aboutus';
import HomeScreen from './HomeScreen';

function AboutScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.heading}>
                <Text style={styles.headingText}>About IQRA Rewards</Text>
            </View>

            <View style={styles.Logo}>
                <Image
                    style={{ width: 125, height: 125, }}
                    source={require('../assets/iqra-logo.png')}
                ></Image>
            </View>

            <View style={styles.Subview1}>
                <Text style={styles.SubViewText1}>Vision:</Text>
                <Text style={styles.SubViewText2}>A journey to Sadaqah Jariya, begins from home</Text>
            </View>

            <View style={styles.Subview2}>
                <Text style={styles.SubViewText1}>Mission:</Text>
                <Text style={styles.SubViewText2}>A non-prot organization aiming to elevate the family relationships by leveraging the knowledge capital persist inside the family for the betterment of the next generation.</Text>
            </View>

            <View style={styles.Subview2}>
                <Text style={styles.SubViewText1}>Why IQRA name?</Text>
                <Text style={styles.SubViewText2}>Masha Allah – as the name suggest “IQRA” means read.. As the rest word of Allah which was revealed to Prophet Mohammed (s.a) by Angel Gabriel (a.s), gives us a boost to be knowledgeable..</Text>
            </View>

            <View style={styles.Subview2}>
                <Text style={styles.SubViewText1}>What's in it for individual?</Text>
                <Text style={styles.SubViewText2}>Its gives opportunity to excel in the Islamic and Academic journey respecting the family values. It also support, motivates and rewards for there accomplishments.</Text>
                <Text style={styles.SubViewText2}>Lastly its also an act of Ilmun Naa - Benecial Knowledge</Text>
            </View>


            <View>
                <Text style={styles.SubViewText3}>Contact us:</Text>
            </View>
            <View style={styles.Subview3}>
                <View>
                    <Text style={styles.SubViewText2}>Visit: www.iqrarewards.com </Text>
                    <Text style={styles.SubViewText2}>Mobile: +91 99999999/ 988888888</Text>
                    <Text style={styles.SubViewText2}>Email: iqrarewards@gmail.com</Text>
                    <Text style={styles.SubViewText2}>WhatsApp: 001 415-XXX-XXXX</Text>
                </View>
                <View style={styles.Subview4}>
                    <Avatar.Image
                        source={{
                            uri: 'https://unsplash.com/photos/27QcqVqgVg4'
                        }}
                        size={50}
                    />
                    <Text style={styles.SubViewText2}>Founder:</Text>
                    <Text style={styles.SubViewText4}>JAABIR AHMED</Text>
                </View>
            </View>

            <View style={styles.Subview5}>
                <Button title='Close' color='#3b5b7e' onPress={() => { props.nav.navigate('HomeScreen') }} ></Button>
            </View>
        </ScrollView>
    );
}

export default AboutScreen;

