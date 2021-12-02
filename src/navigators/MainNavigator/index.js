import React from 'react'
import {View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../../screens/MainScreen/MainScreen';
import DetailScreen from '../../screens/DetailScreen/DtScreen';
import recipeModel from '../../models/recipeModel.js'

const Stack = createNativeStackNavigator();

export type MainParams = {
  Main: undefined,
  DtScreen: undefined,
  recipeDetail: recipeModel;
}

const Component = () => {
  return (
    <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="DtScreen" component={DetailScreen}/>
    </Stack.Navigator>
  )

}

export default Component;