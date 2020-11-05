import React, { useState } from 'react';
import { Text, StyleSheet, Alert, ImageBackground, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const ImgPicker = props => {
  const [pickedImage, setPickedImage] = useState();
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setPickedImage(image.uri);
  };

  return (
    <ImageBackground style={styles.image} source={!pickedImage ? require('../assets/user.png') : { uri: pickedImage }} >
      <Text style={styles.camera}><Ionicons name="ios-camera" size={24} color={Colors.golden} onPress={takeImageHandler} /></Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height/6,
    width: Dimensions.get('window').width/4,
    borderWidth:2
  },
  camera: {
    textAlign: "center",
    marginTop: Dimensions.get('window').height/8.9,
    marginLeft: Dimensions.get('window').width/8,
    backgroundColor: 'white',
    justifyContent: 'center'
  }
});

export default ImgPicker;
