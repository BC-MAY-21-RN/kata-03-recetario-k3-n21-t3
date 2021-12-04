import React from 'react'
import {Alert, Button, View, Text, TextInput, SafeAreaView, ScrollView, StyleSheet,  } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './stylesMain';
import Card from '../../components/Card/Card.js';
import recetas from '../../helpers/recetas.json';
import recipeModel from '../../models/recipeModel.js'


import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const MainScreen = (props: Props) => {
  const {navigation} = props;

  const onSelectedRecipe = (receta: recipeModel) =>{
    navigation.navigate('DtScreen', receta)
  }


  {/* Render para renreziar las recetas TRENDING. */}
  const renderRecipe = recetas?.map((receta, index)=>{
    if(receta.tag == "TRENDING")
    {
      return <Card key={`recetas-${index}`} receta={receta} onClick={onSelectedRecipe}/>
    }
  })


  {/* Render para renreziar las recetas recientes. */}
  const renderFavRecipe = recetas?.map((receta, index)=>{
    if(receta.recent == 1)
    {
      return <Card key={`recetas-${index}`} receta={receta} onClick={onSelectedRecipe}/>
    }
  })


  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.body}>
        <View style={styles.container2}>
          <Text style={styles.text}> Trending</Text>
          <ScrollView horizontal={true}>{renderRecipe}</ScrollView>


          <Text style={styles.text}> Recent </Text>
          <ScrollView horizontal={true}>{renderFavRecipe}</ScrollView>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default MainScreen;