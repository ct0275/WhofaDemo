import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../../components/ProfilePicture';
import { useNavigation, useTheme } from '@react-navigation/native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import styles from './styles';
import { theme } from '../..//data/props';
import { Dimensions } from 'react-native';

const ProfileScreen = ({route}) => {

  const { colors } = useTheme();
  const bgcolor = (theme === 'dark' ? '#424242' : 'white');

  const { userId, userName, imageUri } = route.params;

  console.log("ProfileScreen > route.name : " + route.name + " / userId : " + userId + " / imageUri : " + imageUri + " / name : " + userName );

  const navigation = useNavigation();

  const onDisplayPress = (wuTo, followType) => {

    console.log("ProfileScreen > wuTo : " + wuTo + " / followType : " + followType);
    navigation.navigate(wuTo, { userId: userId, userName: userName, followType: followType });
  }

  const intro = "서울에서 기타, 건반 그리고 노래를 합니다. \n콜라보환영!! \n매주 토요일 홍대제비다방 8시!!";
  const hashtag = "#건반 #기타 #신이내린목소리 #홍대 #제비다방 #성수 #라이브 #노래하는_매주 #홍대2번출구 #락카페아님 #연주 #버스킹 ";
  const following = 650;
  const follower = 150;
  const myCoin = 65;

  // console.log("ProfileScreen > userid : " + userId + " / imageUri : " + imageUri + " / name : " + name + " / followType : " + followType);

  return (
    <View style={styles.container}>
      <View style={[ styles.topProfile, {backgroundColor: bgcolor } ]}>
        <View style={styles.profilePicture}>
          <ProfilePicture uri={imageUri} size={Dimensions.get('window').height * 0.37} />
        </View>
        <View style={styles.middleProfile}>
          <Text style={[ styles.name, {color: colors.text} ]}>{userName}</Text>
          <Text style={[ styles.intro, {color: colors.text} ]}>{intro}</Text>
          <Text style={[ styles.hashtag]}>{hashtag}</Text>
        </View>
      </View>
      
      <View style={styles.bottomProfile}>
        <TouchableOpacity onPress={() => onDisplayPress("MyVideo")} style={[ styles.editButton , {backgroundColor: bgcolor } ]} >
          <Text style={[ styles.displayText, {color: colors.text} ]}>프로필 편집</Text>
        </TouchableOpacity>
      </View>
      {/* <Text/> */}

      <View style={styles.infoContainer}>
        <View>
          <TouchableOpacity onPress={() => onDisplayPress("Follow", "i")} style={[ styles.displayButton, {backgroundColor: bgcolor } ]} >
            <Text style={[ styles.displayText , {color: colors.text} ]}>{following}{"\n"}팔로잉</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => onDisplayPress("Follow", "r")} style={[ styles.displayButton, {backgroundColor: bgcolor } ]} >
            <Text style={[ styles.displayText, {color: colors.text} ]}>{follower}{"\n"}팔로워</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => onDisplayPress("MyCoin")} style={[ styles.displayButton, {backgroundColor: bgcolor } ]} >
            <Text style={[ styles.displayText, {color: colors.text} ]}>{myCoin}{"\n"}후파코인</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoContainer}>
      <View>
        <TouchableOpacity onPress={() => onDisplayPress("MyVideo")} style={[ styles.displayButton, {backgroundColor: bgcolor } ]} >
            <Text style={[ styles.displayText, {color: colors.text} ]}>{2}{"\n"}콘서트</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => onDisplayPress("MyVideo")} style={[ styles.displayButton, {backgroundColor: bgcolor } ]} >
            <Text style={[ styles.displayText, {color: colors.text} ]}>{25}{"\n"}내 동영상</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => onDisplayPress("MyVideo")} style={[ styles.displayButton, {backgroundColor: bgcolor } ]} >
            <Text style={[ styles.displayText, {color: colors.text} ]}>{170}{"\n"}펜레터</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default ProfileScreen;