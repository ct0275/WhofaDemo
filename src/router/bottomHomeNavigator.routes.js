import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeStackScreen from './home.routes';
import CreatePostScreen from "../screens/CreatePostScreen";
import CollectionScreen from "../screens/CollectionScreen";
import MyImageScreen from "../screens/MyImageScreen";

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return <Foundation name="home" size={30} color={color} />;
        }
        if (route.name === 'Rank') {
          // return <Foundation name="crown" size={size} color={color} />;
          return <Foundation name="crown" size={30} color={color} />;
        }
        if (route.name === 'Post') {
          return <Feather name="mic" size={30} color={color} />;
        }
        if (route.name === 'Search') {
          return <Feather name="search" size={size} color={color} />;
        }
        if (route.name === 'Collection') {
          return <MaterialIcons name="video-collection" size={size} color={color} />;
        }
        if (route.name === 'MyImage') {
          return <FontAwesome name="bookmark" size={size} color={color} />;
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: 'darkorange',
      // inactiveTintColor: 'gray',
      // showLabel: false,
    }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Rank" component={HomeStackScreen} />
    <Tab.Screen name="Post" component={CreatePostScreen} />
    <Tab.Screen name="Search" component={HomeStackScreen} />
    <Tab.Screen name="Collection" component={HomeStackScreen} />
    {/* <Tab.Screen name="MyImage" component={MyImageScreen} /> */}
  </Tab.Navigator>
)

export default BottomHomeNavigator;
