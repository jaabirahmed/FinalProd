import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';

function ProductDetailsScreen(props) {
    return (
        <ScrollView>
            <Image style={styles.image} />
            <View style={styles.actions}>
                <Button color={Colors.primary} title='Add To Cart' onPress={() => { }} />
            </View>
            <Text styles={styles.price}>$Price</Text>
            <Text styles={styles.description}>Hi Welcome to Product Details Screen</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        marginVertical: '10',
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: '20'
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
    }
});

export default ProductDetailsScreen;