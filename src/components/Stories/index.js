import React from 'react';
import { FlatList } from 'react-native';
import Story from '../Story';
import storiesData from '../../data/stories';

import styles from "./styles";

const Stories = () => (
  <FlatList
    data={storiesData}
    keyExtractor={({user: { id }}) => id}
    horizontal
    showsHorizontalScrollIndicator={true}
    style={styles.container}
    renderItem={({item}) => <Story story={item}/>}
  />
)

export default Stories;
