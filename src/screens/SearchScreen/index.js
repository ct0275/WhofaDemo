import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './styles';

const SearchScreen = ({route}) => {

  console.log("SearchScreen > route.name : " + route.name);

  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder=" "
        onChangeText={(search) => setSearch(search)}
        lightTheme={true}
        value={search}
        round={true}
        // containerStyle={{backgroundColor: 'white',height:30}}
        // style={{backgroundColor: 'white', height:20}}
      />
      <Text>Whofa : Search value is "{search}"</Text>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.hashtag}><Text># 가을노래</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 트로트</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 쿨재즈</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 클래식연주</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 드럼연주</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 비보이즈댄스</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 가을노래</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 트로트</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 쿨재즈</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 클래식연주</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 드럼연주</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 비보이즈댄스</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 드럼연주</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 미쓰트롯</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 알쓸범잡</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 비오는날</Text></TouchableOpacity>
        <TouchableOpacity style={styles.hashtag}><Text># 개그맨</Text></TouchableOpacity>
      </View>
      
    </View>
  )
}

export default SearchScreen;
