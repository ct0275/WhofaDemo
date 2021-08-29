import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

const ProfilePicture = ({ uri, size = 70, radius = 10 }) => (
  <View style={[styles.container, { width: size + 2, height: size + 2, borderRadius: radius }]}>
    <Image
      source={{ uri }}
      style={[styles.image, { width: size, height: size, borderRadius: radius }]}
    />
  </View>
)

export default ProfilePicture;
