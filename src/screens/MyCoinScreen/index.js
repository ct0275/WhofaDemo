import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../../components/ProfilePicture';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import data from '../../data/mycoin';

import styles from './styles';
 
const MyCoinScreen = ({route}) => {
  // const { userId, imageUri, name } = route.params;
  const navigation = useNavigation();

  const onDisplayPress = () => {
    console.log('aaa');
  }

  const name = "Bryan Choi";

  // console.log("MyCoinScreen > userid : " + userId + " / imageUri : " + imageUri + " / name : " + name);

  return (
    <View style={styles.container}>
      <View onPress={onDisplayPress} style={styles.top} >
        <Text style={styles.topUserId}>{name}</Text>
        <View style={{flexDirection:'row'}}>
        <View style={styles.topCoinImage}>
          <FontAwesomeIcon name="coins" size={90} color="darkorange" />
        </View>
        <View style={styles.topStarImage}>
          <AntDesign name="star" size={20} color="orange" style={{position: 'absolute'}} />
          <AntDesign name="star" size={20} color="darkorange" style={{position: 'absolute', marginLeft: 51, marginTop: 10}} />
          <AntDesign name="star" size={10} color="orange" style={{position: 'absolute', marginLeft: 21, marginTop: 10}} />
          <AntDesign name="star" size={15} color="darkorange" style={{position: 'absolute', marginLeft: 13, marginTop: 21}} />
          <AntDesign name="star" size={30} color="orange" style={{position: 'absolute', marginLeft: 25, marginTop: 20}} />
        </View>
        </View>
        <Text style={styles.topCoinValue}>65,000 WC</Text>
      </View>
      <View style={styles.middle}>
        <TouchableOpacity style={styles.middleButton} onPress={onDisplayPress} ><Text style={{textAlign: 'center'}}>구매하기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton} onPress={onDisplayPress} ><Text style={{textAlign: 'center'}}>출금하기</Text></TouchableOpacity>
        {/* <TouchableOpacity onPress={onDisplayPress} ><Text style={styles.middleButton}>출금하기</Text></TouchableOpacity> */}
        {/* <TouchableOpacity onPress={onDisplayPress} ><Text style={styles.displayButton}>기부하기</Text></TouchableOpacity>        
        <TouchableOpacity onPress={onDisplayPress} ><Text style={styles.displayButton}>상세내역</Text></TouchableOpacity> */}
      </View>
      <View style={styles.bottom} >
        <FlatList
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
              const account = item.item;
              return(
                <View style={styles.bottomContainer}>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.bottomImage} source={{uri: account.image}}/>
                  </TouchableOpacity>
                  <View style={styles.bottomContents}>
                    <Text style={styles.bottomName}>{account.name}</Text>
                  </View>
                  <View style={styles.bottomContents}>
                    {account.inout === "i" ? <AntDesign name="caretup" size={15} color="red" /> : <AntDesign name="caretdown" size={15} color="blue" />}
                    <Text style={styles.bottomAmount}> {account.amount} wc</Text>
                  </View>
                  <View>
                    <Text style={styles.bottomTime}>{account.time}</Text>
                  </View>
                </View>
              );
            }}/>
      </View>
    </View>
  );
}

export default MyCoinScreen;