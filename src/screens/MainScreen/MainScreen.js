import React from 'react'
import {Text, SearchBar, StyleSheet} from 'react-native';

const MainScreen = () => {
  return(
    <ScrollView>
      {/* //horizontal Scroll */}

      <SearchBar 
        placeholder ="What do you want to eat?"
        />

      {/* //Text > trending */}
      <Text> Trending</Text>
        {/* //horizontal Scroll */}

      {/* //Text > trernding */}
      <Text> Recent </Text>
        {/* //horizontal Scroll */}
    </ScrollView>
  )
}

//Estilos
const styles = StyleSheet.create({
  
});

export default MainScreen;