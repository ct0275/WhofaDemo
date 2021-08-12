import React, {useState, useRef} from 'react';
import { FlatList, View, ScrollView, Text } from 'react-native';
import Video from 'react-native-video';
import data from "../../data/home.js";
import Post from "../../components/PostSimple";
import styles from './styles';
import Stories from '../../components/Stories';

const CollectionScreen = ({route}) => {
  
  console.log("SearchScreen > route.name : " + route.name + " / wuFrom : " + route.wuFrom + ", period : " + route.period);

  const flatlistConfig = {
    itemVisiblePercentThreshold: 30,
    waitForInteraction: true,
    minimumViewTime: 5,
  };

  return (
    <View style={styles.background}> 
      <Text style={styles.headline_text}>Video Collection </Text>
      <Text style={styles.explore_text}>Still listening, good Lord, this little Korean girl can really sing.</Text>
      <View>
          <Stories></Stories>
      </View>
      <View style={{flex:1}}>
        <FlatList
          data={data}
          renderItem={({item}) => <Post post={item} />}
          keyExtractor={({id}) => id}
          viewabilityConfig={flatlistConfig}
          horizontal={false}
          numColumns={3}
        />
      </View>
    </View>
  )

}


export default CollectionScreen;
