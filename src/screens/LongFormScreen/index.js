import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback} from 'react-native';
import VideoPlayer from 'react-native-video-player';

import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../../components/ProfilePicture';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useTheme } from '@react-navigation/native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import data from '../../data/recommend.js'
import styles from './styles';
 
const LongFormScreen = ({route}) => {
  const { userId, imageUri, userName, postId, videoUri, thumbnailUri, likesCount, postedAt } = route.params;
  
  const [isLiked, setIsLike] = useState(false);  

  const { colors } = useTheme();

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

  const onLikePressed = () => {
    // const amount = isLiked ? -1 : 1;
    // setLikesCount(likesCount + amount);
    setIsLike(!isLiked);
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
              repeat={true}
              pauseOnPress={true}
              autoplay={true}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={{flexDirection: 'row', marginTop: 5}}>
        <ProfilePicture uri={imageUri}></ProfilePicture>
        <View style={{flexDirection: 'column'}}>
        <Text style={{marginLeft: 20, marginTop: 5, fontWeight: 'bold', color: colors.text}}>{userName}</Text>
        <Text style={{marginLeft: 20, marginTop: 5, color: colors.text}}>{likesCount} Views, {postedAt}</Text>
        <Text style={{marginLeft: 20, marginTop: 5, color: 'orange'}}>#제니 #여신 #놀랍다 #신부감</Text>
        </View>
      </View>
      
      <View style={{flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10}}>  
        <TouchableOpacity onPress={onLikePressed}>
          {isLiked ?
          <FontAwesome name="star" size={25} color={"orange"} />
              : <FontAwesome name="star-o" size={25} color={"#424242"} />
          }
        </TouchableOpacity>
        
        <TouchableOpacity><FontAwesome5 name="comment" size={25} color={"#424242"} /></TouchableOpacity>
        <TouchableOpacity><AntDesign name="sharealt" size={25} color={"#424242"} /></TouchableOpacity>
        <TouchableOpacity><AntDesign name="plussquareo" size={25} color={"#424242"} /></TouchableOpacity>
        <TouchableOpacity><FontAwesome name="bookmark" size={25} color={"#424242"} /></TouchableOpacity>
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
                    <Text style={[styles.bottomName, {color: colors.text}]}>{recomm.caption} {'\n'}{recomm.user.name}</Text>
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
