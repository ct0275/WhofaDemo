import React from 'react';
import { SafeAreaView } from 'react-native';
import Feed from '../../components/Feed';

const HomeScreen = () => (
  <SafeAreaView>
    <Feed 
      wuFrom="Home"
    />
  </SafeAreaView>
)

export default HomeScreen;
