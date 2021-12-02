import React from 'react'
import {Alert, Button, View, Text, TextInput, SafeAreaView, ScrollView, StyleSheet,  } from 'react-native';
//import { SearchBar } from 'react-native-elements';
import styles from './stylesMain';
import Card from '../../components/Card/Card.js';
import recetas from '../../helpers/recetas.js';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const MainScreen = (props: Props) => {
  const {navigation} = props;
  
  const renderRecipe = recetas?.map((receta, index)=>{
    return <Card name={receta.name} img={receta.image} />
  })

  {/* Render para renreziar los platillos recientes. */}
  const renderFavRecipe = recetas?.map((receta, index)=>{
    if(receta.recent == 1)
    {
      return <Card name={receta.name} img={receta.image} />
    }
  })

  const changeScreen = () =>{
      navigation.navigate('DtScreen')
  }
  
  return(
    <SafeAreaView style={styles.container}>  
      <ScrollView style={styles.body}>
        
        <View style={styles.container2}>
          {/* SearchBar */}
          <TextInput 
            style={styles.SearchBar}
          />

          {/* Horizontal scroll with info */}
          <Text style={styles.text}> Trending</Text>
            <ScrollView horizontal={true}>{renderRecipe}</ScrollView>

          {/* //Text > trernding */}
          <Text style={styles.text}> Recent </Text>
            <ScrollView horizontal={true}>{renderFavRecipe}</ScrollView>

        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default MainScreen;