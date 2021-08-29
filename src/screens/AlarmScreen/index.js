import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';

import AntDesign from "react-native-vector-icons/AntDesign";
import styles from './styles';
import data from '../../data/follow';
import ProfilePicture from '../../components/ProfilePicture';

const AlarmScreen = (props) => {  
  
    const {userid, followType} = props.route.params;
    const dataFilter = data.filter(x => x.followType === followType);
    
    // console.log("AlarmScreen > route.followType : " + followType);

    return (

      <Text></Text>
      );
}
  
export default AlarmScreen;