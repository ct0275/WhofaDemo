import React from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import data from '../../data/comment';
import { useTheme } from '@react-navigation/native';

const CommentScreen = () => {

  const { colors } = useTheme();

    return (
        <FlatList
          style={styles.root}
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
            const Notification = item.item;
            return(
              <View style={styles.container}>
                <TouchableOpacity onPress={() => {}}>
                  <Image style={styles.image} source={{uri: Notification.image}}/>
                </TouchableOpacity>
                <View style={styles.content}>
                  <View style={[ styles.contentHeader, {color: colors.text} ]}>
                    <Text  style={[ styles.name, {color: colors.text} ]}>{Notification.name}</Text>
                    <Text style={[ styles.time, {color: colors.text} ]}>
                      9:58 am
                    </Text>
                  </View>
                  <Text style={{color: colors.text}} rkType='primary3 mediumLine'>{Notification.comment}</Text>
                </View>
              </View>
            );
          }}/>
      );
}
  
export default CommentScreen;