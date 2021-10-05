import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Accueil from './src/Refactor/Accueil';
import User from './src/Backoffice/User';
import UserProfil from './src/Backoffice/UserProfil';

const Stack = createNativeStackNavigator();
export default class D4F extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="home" component={Accueil}></Stack.Screen>
          <Stack.Screen name="user" component={User}></Stack.Screen>
          <Stack.Screen name="userprofil" component={UserProfil}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}