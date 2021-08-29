import React, { useState, useContext } from 'react';
import {View, Image, Text, TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
// import logo from "../img/logo.png";
import ProfilePicture from '../components/ProfilePicture';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Badge } from 'react-native-elements';

import HomeScreen from "../screens/HomeScreen";
import RankScreen from "../screens/RankScreen";
// import SearchScreen from "../screens/SearchScreen";
import SearchScreen from "../screens/SearchScreen2";
import CollectionScreen from "../screens/CollectionScreen";
import PostScreen from "../screens/CreatePostScreen";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { appName, theme } from '../data/props';
import ToggleSwitch from 'toggle-switch-react-native';

import AppContext from '../components/AppContext';

const HomeStack = createStackNavigator();

const HomeRoutes = ({route}) => {
  
  const {colors} = useTheme();

  const [isDark, setIsDark] = useState(false);
  
  const screen = route.name === "Home" ? HomeScreen :
  route.name === "Rank" ? RankScreen : 
  route.name === "Post" ? PostScreen : 
  route.name === "Search" ? SearchScreen : 
  route.name === "Collection" ? CollectionScreen : HomeScreen;
  
  const navigation = useNavigation();
  
  const userId = '0';
  const userName = "Bryan choi";
  const imageUri = "https://drive.google.com/uc?id=13d_h-NMu03WCqwiKzk9lejtv1P3KSNWb";
  const followType = "i";
  
  console.log("router > home.routes > userid : " + userName + " / name : " + userName + " / imageUri : " + imageUri + " route.name : " + route.name);
  
  const onAlarmPress = () => {
    navigation.navigate("Alarm", { userId: userId, userName: userName, imageUri: imageUri, followType: followType });
  }

  const onProfilePress = () => {
    navigation.navigate("Profile", { userId: userId, userName: userName, imageUri: imageUri, followType: followType });
  }

  const onThemeToggle = (isOn) => {
    setIsDark(!isDark); 
    console.log("changed to : ", isOn);
  }
  
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={route.name}
        component={screen}
        options={{
          // title: 'Whosfasta',
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerLeft: () => (
            <View style={{flexDirection: 'row'}}>
            {/* // <Image source={logo} resizeMode="contain" style={{width: 130, height: 50}}/> */}
            <Text style={{fontFamily: 'whichoneuneed', fontSize: 25, fontWeight: 'bold', color: 'darkorange'}}>{appName}</Text>
            
<ToggleSwitch isOn={isDark}
  onColor="orange"
  offColor="#424242"
  label=""
  labelStyle={{ color: colors.text }}
  size="small"
  onToggle={isOn => onThemeToggle(isOn)}
/>
            </View>
          ),
          headerTitle: () => (
            <Image/>
          ),
          headerRight: () => (
          <View style={{flex:1, flexDirection:'row'}}>

            <TouchableOpacity onPress={onAlarmPress} style={{marginTop: 10, marginRight: 15}}>

              <FontAwesome name="bell-o" size={30} color={colors.text}/>
              <Badge status="error" value="+99" containerStyle={{ position: 'absolute', top: -5, right: -10 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onProfilePress}>
              <ProfilePicture uri={imageUri} size={40} />
            </TouchableOpacity>
          </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeRoutes;
