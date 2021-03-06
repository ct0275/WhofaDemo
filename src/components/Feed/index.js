import React, {useState, useCallback } from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import Post from "../Post";
import PostSmall from "../PostSmall"
import Stories from "../Stories";

import dummyHome from "../../data/home.js";
import dummyMyVideo from "../../data/myvideo.js";
import dummyCurrentRank from "../../data/rankc.js";
import dummyDailyRank from "../../data/rankd.js";
import dummyWeeklyRank from "../../data/rankw.js";
import dummyMonthlyRank from "../../data/rankm.js";

import DropDownPicker from 'react-native-dropdown-picker';

import { useColorScheme } from 'react-native-appearance';

import styles from './styles';

import { theme } from '../../data/props';

const Feed = (props) => {
  
  console.log("components > Feed > wuFrom : " + props.wuFrom + ", period : " + props.period + ", height: " + Dimensions.get('window').height);

  // const scheme = useColorScheme();
  //강제다크모드설정
  const scheme = theme;

  const flatlistConfig = {
    // maxToRenderPerBatch: 5,
    removeClippedSubviews: true,
    itemVisiblePercentThreshold: 50,
    waitForInteraction: false,
    // minimumViewTime: 5,
    // windowSize: 5
  };

  const dummyFiltered = dummyMyVideo.filter(x => x.user.id === props.userId);

  const data = (props.wuFrom === "Home" ? dummyHome : ((props.wuFrom === "Rank" && props.period === "Current") ? dummyCurrentRank 
                                                     : (props.wuFrom === "Rank" && props.period === "Daily")   ? dummyDailyRank
                                                     : (props.wuFrom === "Rank" && props.period === "Weekly")  ? dummyWeeklyRank
                                                     : (props.wuFrom === "Rank" && props.period === "Monthly")  ? dummyMonthlyRank
                                                     : dummyFiltered));
                                                 
  
  // Flatlist의 한 아이템의 높이
  // console.log(Dimensions.get('window').height);
  const ITEM_HEIGHT = Dimensions.get('window').width + 10;
  
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleScroll = useCallback(({ nativeEvent: { contentOffset: { y } } }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = Math.round(y / ITEM_HEIGHT);
  
    setFocusedIndex(offset)
  }, [setFocusedIndex]);

  // Dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');
  const [items, setItems] = useState([
    // {label: '전체', value: 'all'},
    // {label: 'NEW', value: 'new'}, 
    // {label: '노래', value: 'sing'},
    // {label: '발라드', value: 's1', parent: 'sing'},
    // {label: '댄스', value: 's2', parent: 'sing'},
    // {label: '랩', value: 's3', parent: 'sing'},
    // {label: 'R&B', value: 's4', parent: 'sing'},
    // {label: '인디', value: 's5', parent: 'sing'},
    // {label: '락앤롤', value: 's6', parent: 'sing'},
    // {label: '트로트', value: 's7', parent: 'sing'},
    // {label: '블루스', value: 's8', parent: 'sing'},
    // {label: '댄스', value: 'dance'},
    // {label: '힙합', value: 'd1', parent: 'dance'},
    // {label: '프리', value: 'd2', parent: 'dance'},
    // {label: '연주', value: 'play'},
    // {label: '랩', value: 'rap'},
    // {label: '연예', value: 'enter'},

    {label: '전체', value: 'all'},
    {label: 'NEW', value: 'new'}, 
    {label: '노래', value: 'sing'}, 
    {label: '댄스', value: 'dance'},
    {label: '연주', value: 'play'},
    {label: '연예', value: 'enter'},
    {label: '', value: 'a1'},
    {label: '', value: 'a2'},
    {label: '', value: 'a3'},
    {label: '', value: 'a4'},
    {label: '', value: 'a5'},
    {label: '', value: 'a6'},
    {label: '', value: 'a7'},
    {label: '', value: 'a8'},
    {label: '', value: 'a9'},
    {label: '', value: 'b1'},
    {label: '', value: 'b2'},
    {label: '', value: 'b3'},
    {label: '', value: 'b4'},
  ]);

  const showDropdown = props.wuFrom === "Rank" ? (<View style={styles.dropdownWrap}>
    <DropDownPicker
      style={scheme === 'dark' ? styles.dropdown : styles.dropdown}
      // disabledStyle={{
      //   opacity: 0.3
      // }}
      textStyle={{
        fontSize: 15
      }}
      containerStyle={open ? styles.dropdownOpen : styles.dropdownClose}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      maxHeight={Dimensions.get('window').height - 140}
      // maxHeight={400}
      modalProps={{
        animationType: "fade"
      }}
      theme={scheme === 'dark' ? "DARK" : "LIGHT"}  // DARK    LIGHT
      listMode="FLATLIST"  // DEFAULT     FLATLIST     SCROLLVIEW     MODAL
      // searchable={true}
      // multiple={true}
      min={0}
      max={25}
      onChangeValue={(value) => {
        console.log(value);
      }}
      onOpen={() => {
        console.log('open');
        setOpen(true);
      }}
      onClose={() => {
        console.log('close');
        setOpen(false);
      }}
    />
  </View>) : null;

  return (
    <View style={styles.container}> 
      { showDropdown }
      <View>
        <FlatList
          data={data}
          renderItem={({item, index}) => ( props.wuFrom === "Rank" ? <PostSmall post={item} wuFrom={props.wuFrom} /> : <Post post={item} currentIndex={index} focusedIndex={focusedIndex}/> ) }
          keyExtractor={({id}) => id}
          viewabilityConfig={flatlistConfig}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          onScroll={handleScroll}
          />
      </View>
    </View>
  )

}

export default Feed;
