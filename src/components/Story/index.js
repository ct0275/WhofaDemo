import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import ProfilePicture from "../ProfilePicture";

const Story = (props) => {
  const {
    story: {
      user: {
        id,
        imageUri,
        name
      }
    }
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    console.log("components > Story > userId : " + id + " / userName : " + name);
    navigation.navigate("Profile", { userId: id, userName: name, imageUri: imageUri });
  }

  console.log(imageUri);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      {/* <Text style={styles.name}>{name}</Text> */}
    </TouchableOpacity>
  )
}

export default Story;
