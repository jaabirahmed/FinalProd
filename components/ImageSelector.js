import React, { useState } from 'react';
import { Text, StyleSheet, Alert, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';

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
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setPickedImage(image.uri);
    props.onImagetaken(image.uri);
  };

  return (
    <ImageBackground style={styles.image} source={!pickedImage ? require('../assets/user.png') : { uri: pickedImage }} >
      <Text style={styles.camera}><Ionicons name="ios-camera" size={24} color="black" onPress={takeImageHandler} /></Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  camera: {
    textAlign: "center",
    marginTop: 56,
    marginLeft: 60,
    backgroundColor: 'white',
    justifyContent: 'center'
  }
});

export default ImgPicker;
