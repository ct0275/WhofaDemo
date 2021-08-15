import React from 'react';
import {Image, TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import logo from "../img/logo.png";
import ProfilePicture from '../components/ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'react-native-elements';

import HomeScreen from "../screens/HomeScreen";
import RankScreen from "../screens/RankScreen";
import SearchScreen from "../screens/SearchScreen";
import CollectionScreen from "../screens/CollectionScreen";
import PostScreen from "../screens/CreatePostScreen";


const HomeStack = createStackNavigator();

const HomeRoutes = ({route}) => {
  
  
  const screen = route.name === "Home" ? HomeScreen :
  route.name === "Rank" ? RankScreen : 
  route.name === "Post" ? PostScreen : 
  route.name === "Search" ? SearchScreen : 
  route.name === "Collection" ? CollectionScreen : HomeScreen;
  
  const navigation = useNavigation();
  
  const userId = '0';
  const name = "Bryan choi";
  const imageUri = "https://drive.google.com/uc?id=13d_h-NMu03WCqwiKzk9lejtv1P3KSNWb";
  const followType = "i";
  
  console.log("router > home.routes > userid : " + userId + " / name : " + name + " / imageUri : " + imageUri + " route.name : " + route.name);
  
  const onProfilePress = () => {
    navigation.navigate("Profile", { userId: userId, name: name, imageUri: imageUri, followType: followType });
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
            marginRight: 5,
          },
          headerLeft: () => (
            <Image source={logo} resizeMode="contain" style={{width: 130, height: 50}}/>
            ),
            headerTitle: () => (
              <Image/>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={onProfilePress}>
              <ProfilePicture uri={imageUri} size={40} />
              <Badge status="error" value="+99" containerStyle={{ position: 'absolute', top: 5, right: 0 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeRoutes;
