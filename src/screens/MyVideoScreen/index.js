import React from 'react';
import { SafeAreaView } from 'react-native';
import Feed from '../../components/Feed';

const MyVideoScreen = ({ route }) => {
  const { userId, followType } = route.params;

  console.log("MyVideoScreen > route.name : " + route.name + " / userId : " + userId)

  return (
    <SafeAreaView>
      <Feed 
        wuFrom={route.name}
        userId={userId}
      />
  </SafeAreaView>
  )
}

export default MyVideoScreen;
