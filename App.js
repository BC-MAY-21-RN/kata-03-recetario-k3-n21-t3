import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigatoor } from '@react-navigation/native-stack'

import MainScreen from './src/screens/MainScreen/MainScreen.js';

const Stack = createStackNavigatoor();

const App = () =>{
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* Screen 1 */}
          <Stack.Screen 
            name="MainScreen"
            component={MainScreen}
          />
          {/* Screen 2 */}
          <Stack.Screen
            name="DtScreen"
            component={DtScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
  )
}


export default App;

