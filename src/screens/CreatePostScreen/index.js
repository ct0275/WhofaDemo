import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import Post from '../../components/PostLarge';

import posts from '../../data/home'

const CreatePostScreen = ({route}) => {
  
  console.log("CreatePostScreen > route.name : " + route.name);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={true}
        snapToInterval={Dimensions.get('window').height - 50}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default CreatePostScreen;
