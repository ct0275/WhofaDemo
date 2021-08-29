import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useTheme } from '@react-navigation/native';
import styles from "./styles";

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {

  const { colors } = useTheme();

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
              <FontAwesome name="star" size={30} color={"darkorange"} />
              : <FontAwesome name="star-o" size={30} color={"#424242"} />
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={onCommentPressed}>
            <Octicons name="comment" size={28} color={colors.text}/>
          </TouchableOpacity>
        </View>
        <Text style={[ styles.likes, {color: colors.text} ]}>{likesCount} Likes</Text>
        <Text style={[ styles.caption, {color: colors.text} ]}>{caption}</Text>
        <Text style={[ styles.postedAt, {color: colors.text} ]}>{postedAt}</Text>
      </View>


    </View>
  )
}

export default Footer;
