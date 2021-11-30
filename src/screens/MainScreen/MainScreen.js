import React from 'react'
import {Text, Button, SearchBar, StyleSheet, ScrollView, Alert} from 'react-native';

const MainScreen = () => {

  // const showAlert = () =>
  // Alert.alert(
  //   "Alert Title",
  //   "My Alert Msg",
  //   [
  //     {
  //       text: "Cancel",
  //       onPress: () => Alert.alert("Cancel Pressed"),
  //       style: "cancel",
  //     },
  //   ],
  //   {
  //     cancelable: true,
  //     onDismiss: () =>
  //       Alert.alert(
  //         "This alert was dismissed by tapping outside of the alert dialog."
  //       ),
  //   }
  // );

  const changeScreen = () =>{
    navigation.navigate('Profile')
  }
  
  return(
    <ScrollView>
      {/* //horizontal Scroll */}

      {/* <SearchBar 
        placeholder ="What do you want to eat?"
        /> */}

      {/* //Text > trending */}
      <Text> Trending</Text>
        {/* //horizontal Scroll */}


      {/* //Text > trernding */}
      <Text> Recent </Text>
      <Button
        onPress={""}
        title="Boton para moverte a otra pagina"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
        {/* //horizontal Scroll */}
    </ScrollView>
  )
}

export default MainScreen;