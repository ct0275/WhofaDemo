import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Text, Image, TouchableOpacity} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ADIcon from 'react-native-vector-icons/AntDesign';

const PostLarge = (props) => {
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likesCount: post.likesCount + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const onCommentPress = () => {

  }  

  const onSharePress = () => {
    
  } 

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{uri: post.videoUri}}
            style={styles.video}
            onError={(e) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
          />
          <View style={{position:'absolute', flexDirection:'row'}}>
            <FontAwesome name={'music'} size={20} color='white' />
            <Text style={{color:'white', fontSize:20}}>   Live 방송중입니다... - {post.user.name} </Text> 
            <FontAwesome name={'music'} size={20} color='white' />
          </View>

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={{uri: post.user.imageUri}}
              />

              <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                {isLiked ?
                  <ADIcon name="star" size={50} color={"orange"} />
                  : <ADIcon name="staro" size={50} color={"white"} />
                }
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconContainer} onPress={onCommentPress}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statsLabel}>{post.likesCount}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconContainer} onPress={onSharePress}>
                <Fontisto name={'share-a'} size={35} color="white" />
                <Text style={styles.statsLabel}>{post.likesCount}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{post.user.name}</Text>
                <Text style={styles.description}>{post.caption}</Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>{post.postedAt}</Text>
                  <Image
                // style={styles.songImage}
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Orange_star.svg'}}
              />
                </View>
              </View>


            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PostLarge;
