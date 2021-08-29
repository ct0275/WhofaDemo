/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React,  {useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import Router from './router';
import { theme } from './data/props';

import SplashScreen from 'react-native-splash-screen';

const App: () => React$Node = () => {

  // Splash
  useEffect(() => {
    setTimeout(() => {
      console.log('App loaded.')
      SplashScreen.hide();
    }, 10);
  }, []);

  // const scheme = useColorScheme();
  //강제다크모드설정
  const scheme = theme;
  console.log(scheme);
  console.log(scheme);

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar barStyle="dark-content" />
        <Router />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default App;
