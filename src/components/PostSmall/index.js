import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const PostSmall = (props) => {

  // console.log("components > PostSimple > props.post : " + props.post);

  const [post, setPost] = useState(props.post);
  
  // console.log("components > PostSmall > wuFrom : " + props.wuFrom + " userId : "  + post.user.id);

  const navigation = useNavigation();

  const onVideoPress = () => {
    navigation.navigate("LongForm", {userId: post.user.id, userName: post.user.name, imageUri: post.user.imageUri,  postId: post.id, videoUri: post.videoUri, thumbnailUri: post.thumbnailUri });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.content}>
        <View style={styles.elem}>
          <View style={styles.userInfo}>
            <Image style={styles.profile} source={{uri: post.user.imageUri}}/>
            {/* <Text style={styles.statsLabel}>  {post.caption}</Text>
            <Text style={styles.statsLabel}>   {post.user.name}, </Text>
            <Text style={styles.statsLabel}>조회수 {post.likesCount}회, </Text>
            <Text style={styles.statsLabel}> {post.postedAt} </Text> */}
            <Text style={styles.title}>  {post.caption}, {post.user.name}, 조회수 {post.likesCount}회, {post.postedAt} </Text>
          <TouchableOpacity style={styles.videoThumb} onPress={() => {onVideoPress()}}>
            <Image style={styles.thumbnail} source={{uri: post.thumbnailUri}}/>
            <View opacity={0.7} style={styles.overlay}>
              <FontAwesome5 name="play" size={30} color={'white'} />
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}/>
    </View>
  );
};

export default PostSmall;
