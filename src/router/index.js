import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { MenuProvider } from 'react-native-popup-menu';

import StoryScreen from "../components/Story";
import LoginScreen from "../components/Login";
import HomeScreen from './bottomHomeNavigator.routes';
import RankScreen from "../screens/RankScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MyVideoScreen from "../screens/MyVideoScreen";
import MyCoinScreen from "../screens/MyCoinScreen";
import CommentScreen from "../screens/CommentScreen";
import FollowScreen from "../screens/FollowScreen";
import LongFormScreen from "../screens/LongFormScreen";

import {Platform} from 'react-native';

const RootStack = createStackNavigator();

const Router = () => {
  
  console.log("Router entering ");

  return (
    <MenuProvider>
      <RootStack.Navigator>
        <RootStack.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            headerShown: false,
            title: "홈으로",
          }}
        />
        <RootStack.Screen
          name={"Login"}
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />

        <RootStack.Screen
          name={"Profile"}
          component={ProfileScreen}
          options={{
            ...Platform.select({
              ios: {
                headerShown: true,
                title: "프로파일",
              },
              android: {
                headerShown: false,
              },
            }),

          }}
        />
        <RootStack.Screen
          name={"Follow"}
          component={FollowScreen}
          options={{
            headerShown: true,
            title: "팔로우",
          }}
        />
        <RootStack.Screen
          name={"MyVideo"}
          component={MyVideoScreen}
          options={{
            headerShown: false,
            title: "내영상",
          }}
        />
        <RootStack.Screen
          name={"MyCoin"}
          component={MyCoinScreen}
          options={{
            headerShown: true,
            title: "후파코인",
          }}
        />
        <RootStack.Screen
          name={"Comment"}
          component={CommentScreen}
          options={{
            headerShown: true,
            title: "댓글",
          }}
        />
        <RootStack.Screen
          name={"LongForm"}
          component={LongFormScreen}
          options={{
            headerShown: true,
            title: "재생",
          }}
        />
{/* 
        <RootStack.Screen
          name={"Rank"}
          component={RankScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={"Story"}
          component={StoryScreen}
          options={{
            headerShown: true,
            title: "스토리",
          }}
        />

 */}
    </RootStack.Navigator>
  </MenuProvider>
  );

};

export default Router;