import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native'
import MainNavigator from './src/navigators/MainNavigator/index.js'

const App = () =>{
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>

  )
}


export default App;