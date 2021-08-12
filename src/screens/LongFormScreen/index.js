import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback} from 'react-native';
import VideoPlayer from 'react-native-video-player';

import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../../components/ProfilePicture';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import data from '../../data/recommend.js'
import styles from './styles';
 
const LongFormScreen = ({route}) => {
  const { userId, imageUri, userName, postId, videoUri, thumbnailUri, likesCount, postedAt } = route.params;
  
  const [videoSrc, setVideoSrc] = useState(videoUri);
  // const navigation = useNavigation();
  
  const onVideoPress = (recomVideoUri) => {
    console.log('i');
    console.log(recomVideoUri);
    
    setVideoSrc(recomVideoUri);

    // navigation.navigate("LongForm", {userId: userId, userName: userName, imageUri: imageUri,  postId: postId, videoUri: recomVideoUri, thumbnailUri: thumbnailUri });
  }

  console.log("LongFormScreen > route.name : " + route.name + " / userId : " + userId
  + " / imageUri : " + imageUri
  + " / userName : " + userName
  + " / postId : " + postId
  + " / videoUri : " + videoUri
  + " / thumbnailUri : " + thumbnailUri
  );

  const onDisplayPress = () => {
    console.log('aaa');
  }

  // const name = "Bryan Choi";

  return (
    <View style={styles.container}>
      <View style={styles.top} >
        <TouchableWithoutFeedback>
          <View style={styles.topWrap}>
            <VideoPlayer
              // onPress={onPlayPausePress}
              video={{uri:videoSrc}}
              thumbnail={{uri:thumbnailUri}}
              style={styles.topVideo}
              onError={(e) => console.log(e)}
              resizeMode={'cover'}
              repeat={false}
              pauseOnPress={true}
              autoplay={true}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.bottom} >
        <FlatList
            data={data}
            extraData={data}
            ItemSeparatorComponent={() => {
              return (
                <View style={styles.separator}/>
              )
            }}
            keyExtractor={(item)=>{
              return item.id;
            }}
            renderItem={(item) => {
              const recomm = item.item;
              return(
                <View style={styles.bottomContainer}>
                  <TouchableOpacity style={styles.bottomContents} onPress= {() => {setVideoSrc(recomm.videoUri)}}>
                    <Image style={styles.bottomThumb} source={{uri: recomm.thumbnailUri}}/>
                    <View opacity={0.7} style={styles.overlay}>
                      <FontAwesome5 name="play" size={20} color={'white'} />
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.bottomName}>{recomm.caption} {'\n'}{recomm.user.name}</Text>
                  </View>
                  <View>
                    <Text style={styles.bottomLikes}> {recomm.likesCount} Likes </Text>
                  </View>
                  <View>
                    <Text style={styles.bottomTime}>{recomm.postedAt}</Text>
                  </View>
                </View>
              );
            }}/>
      </View>
    </View>
  );
}

export default LongFormScreen;
