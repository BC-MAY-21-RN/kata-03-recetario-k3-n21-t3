import React from 'react';
import { View, ScrollView, Text,Image, StyleSheet } from 'react-native';
import {styles} from './stylesDtScreen.js';
import {DSHero, IngredientItemList} from '../../components/index.js';

const DetailScreen = (props) => {
  const { route: {params: receta} } = props;
  const {name, servings, ingredientes, image, tag} = receta;

  const renderIngredients = ingredientes?.map((ingredient, index)=>{
    return <IngredientItemList 
      key={`Ingredient-${index}`}
      name={ingredient.nombre}
      quantity={ingredient.cantidad}
      unit={ingredient.unit}
    />
  })

  return (
    <View style={styles.body}>
      <DSHero 
        imageUrl={image}
        tag={tag}
        name={name}
      />
      <View style={styles.middleCompRecipee}>
        <Text style={styles.middleText1}>Ingredients</Text>
        <Text style={styles.middleText2}>for {servings} servings</Text>
      </View>

      <ScrollView style={styles.scrollPadding}>
        {renderIngredients}
      </ScrollView>
    </View>
  )
}

export default DetailScreen;