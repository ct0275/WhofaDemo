import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PostSimple = (props) => {

  // console.log("components > PostSimple > props.post : " + props.post);

  const [post, setPost] = useState(props.post);

  console.log("components > PostSimple > wuFrom : " + props.wuFrom + " userId : "  + post.user.id);

  const navigation = useNavigation();

  const onVideoPress = () => {
    navigation.navigate("LongForm", {userId: post.user.id,
       userName: post.user.name,
       imageUri: post.user.imageUri,  
       postId: post.id, 
       videoUri: post.videoUri, 
       thumbnailUri: post.thumbnailUri,
       postedAt: post.postedAt,
       likesCount: post.likesCount,
    });
  }

  return (

    <View style={styles.container}>
      <TouchableOpacity style={styles.videoThumb} onPress={() => {onVideoPress()}}>
        <Image style={styles.thumbnail} source={{uri: post.thumbnailUri}}/>
        <View opacity={0.7} style={styles.overlay}>
          <FontAwesome5 name="play" size={30} color={'white'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostSimple;
