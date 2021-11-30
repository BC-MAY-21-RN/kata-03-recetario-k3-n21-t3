import React from 'react'
import {Text, Button, ScrollView} from 'react-native';

const MainScreen = ({navigation}) => {

  const changeScreen = (screenTarget) =>{
    navigation.navigate({screenTarget})
  }
  
  return(
    <ScrollView>
      <Text> Trending</Text>
      <Text> Recent </Text>
      <Button
        onPress={changeScreen("DtScreen")}
        title="Boton para moverte a otra pagina"
        color="#841584"
        accessibilityLabel="Change to second screen"
      />
        {/* //horizontal Scroll */}
    </ScrollView>
  )
}

export default MainScreen;