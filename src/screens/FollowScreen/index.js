import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from '../CommentScreen/styles';
import data from '../../data/follow';
import { color } from 'react-native-reanimated';

const FollowScreen = (props) => {  
  
  const { colors } = useTheme();

  const {userid, followType} = props.route.params;
  const dataFilter = data.filter(x => x.followType === followType);
  
  // console.log("FollowScreen > route.followType : " + followType);

  useEffect(() => {
    props.navigation.setOptions({ title: followType === "i" ? "팔로잉" : "팔로워" })
  }, []);


  return (
      <FlatList
        style={styles.root}
        data={dataFilter}
        extraData={dataFilter}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          return(
            <View style={styles.container}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{uri: Notification.image}}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text style={[ styles.name, {color: colors.text} ]}>{Notification.name}</Text>
                  <Text style={[ styles.time, {color: colors.text} ]}>
                    9:58 am
                  </Text>
                  <TouchableOpacity onPress={() => {}}>
                    <AntDesign name="delete" size={20} color={'red'} />
                  </TouchableOpacity>
                </View>
                <Text style={{color: colors.text}} rkType='primary3 mediumLine'>{Notification.comment}</Text>
              </View>
            </View>
          );
        }}/>
    );
}
  
export default FollowScreen;