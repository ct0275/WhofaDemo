import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ProfilePicture from '../../../ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { Divider} from 'react-native-elements';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';

import styles from './styles';

const Header = ({userId, imageUri, name}) => {

  const navigation = useNavigation();

  const onProfilePress = () => {
    console.log("Post > header > userid : " + userId + " / name : " + name + " / imageUri : " + imageUri);
    navigation.navigate("Profile", { userId: userId, name: name, imageUri: imageUri });
  }

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onProfilePress}>
          <View style={styles.left}>
            <ProfilePicture uri={imageUri} size={50} />
            <Text style={styles.name}>{name}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.right}>
          {/* // SlideIn 메뉴일때
          <Menu renderer={renderers.SlideInMenu} > */}
          <Menu>
            <MenuTrigger>
              <Icon name="dots-three-vertical" size={20}/>
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={styles.menuOptions}>
              {/* // SlideIn 메뉴일때 상단바
              <MenuOption style={styles.name}>
                <Fontisto name="minus-a" size={20} style={styles.topbar}/>
              </MenuOption> */}
              <MenuOption onSelect={() => {
                  console.log('PopupMenu Edit');
                }} text='편집' />
              <MenuOption onSelect={() => {
                  console.log('PopupMenu Delete');
                }} text='삭제' />
              <MenuOption>
                <Divider />
              </MenuOption>
              <MenuOption onSelect={() => {
                  console.log('PopupMenu Report');
                }} text='신고' />
              <MenuOption onSelect={() => {
                  console.log('PopupMenu Share');
                }} text='공유' />
            </MenuOptions>
          </Menu>
        </View>

      </View>
  )
}

export default Header;


