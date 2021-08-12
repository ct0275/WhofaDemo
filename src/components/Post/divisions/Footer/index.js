import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {

  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isBookmarked, setIsBookmark] = useState(false);

  const navigation = useNavigation();
 
  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    setIsLike(!isLiked);
  }

  const onBookmarkPressed = () => {
    setIsBookmark(!isBookmarked);
  }

  const onCommentPressed = () => {
    navigation.navigate("Comment", {} );
  }

  useEffect(() =>{
    setLikesCount(likesCountProp)
  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.iconsContainer}>
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={onLikePressed}>
            {isLiked ?
              <ADIcon name="star" size={35} color={"#ea8041"} />
              : <ADIcon name="staro" size={35} color={"#545454"} />
            }
          </TouchableOpacity>

          <TouchableOpacity onPress={onCommentPressed}>
            <FontistoIcon name="commenting" size={30} color={"#545454"}/>
          </TouchableOpacity>

        </View>
        <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
      </View>


    </View>
  )
}

export default Footer;
