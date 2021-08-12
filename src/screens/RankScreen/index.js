import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';  
import Feed from '../../components/Feed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';

function CurrentRankScreen() {
  return (    
    <View style={styles.tapBody}>
      <Feed wuFrom="Rank" period="Current"></Feed>
    </View>
  );
}

function DailyRankScreen() {
  return (
    <View style={styles.tapBody}>
      <Feed wuFrom="Rank" period="Daily"></Feed>
    </View>
  );
}

function WeeklyRankScreen() {
  return (
    <View style={styles.tapBody}>
      <Feed wuFrom="Rank" period="Weekly"></Feed>
    </View>
  );
}

function MonthlyRankScreen() {
  return (
    <View style={styles.tapBody}>
      <Feed wuFrom="Rank" period="Monthly"></Feed>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const RankPeriod = () => {
  return (
    <Tab.Navigator
      initialRouteName="Current"
      tabBarOptions={{
        activeTintColor: 'white',
        labelStyle: { fontSize: 15, fontWeight: 'bold' },
        style: { backgroundColor: 'darkorange' },
        // indicatorStyle :{
        //   backgroundColor:'green'
        // }
      }}
    >
      <Tab.Screen
        name="current"
        component={CurrentRankScreen}
        options={{ tabBarLabel: '실시간' }}
      />
      <Tab.Screen
        name="daily"
        component={DailyRankScreen}
        options={{ tabBarLabel: '일간' }}
      />
      <Tab.Screen
        name="weekly"
        component={WeeklyRankScreen}
        options={{ tabBarLabel: '주간' }}
      />
      <Tab.Screen
        name="monthly"
        component={MonthlyRankScreen}
        options={{ tabBarLabel: '월간' }}
      />
    </Tab.Navigator>
  );
}

const RankScreen = ({route}) => {

  console.log("RankScreen > route.name : " + route.name)

  return (
    <RankPeriod />
  );

}

export default RankScreen;
