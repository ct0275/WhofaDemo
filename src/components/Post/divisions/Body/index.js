import React, {useState, useRef} from 'react';
import {View, TouchableWithoutFeedback, Text, Image, TouchableOpacity, Button} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const Body = (props) => {
  
  console.log("components > Post > Body > currentIndex : " + props.currentIndex + " / focusedIndex : " + props.focusedIndex);
  // console.log("components > Post > Body > videoUri : " + props.videoUri);

  const [paused, setPaused] = useState(true);
  const [post, setPost] = useState(props.post);

  const navigation = useNavigation();

  const onVideoPress = () => {
    console.log('Click');
    setPaused(!paused);
    navigation.navigate("LongForm", {userId: post.user.id, userName: post.user.name, imageUri: post.user.imageUri,  postId: post.id, videoUri: post.videoUri, thumbnailUri: post.thumbnailUri });
  };

  const renderPoster = (props.focusedIndex !== props.currentIndex) ? (
    <Image source={{uri:post.thumbnailUri}} style={styles.thumbnail} />
  ) : null;

  return (
    <TouchableOpacity onPress={onVideoPress}>
      <View>
        <Video 
          source={{uri:post.videoUri}}
          style={styles.videoShort}
          onError={(e) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          // poster={post.thumbnailUri}
          // posterResizeMode={'cover'}
          paused={props.focusedIndex !== props.currentIndex}
        />
        {renderPoster}
      </View>
    </TouchableOpacity >
  )
}

export default Body;
