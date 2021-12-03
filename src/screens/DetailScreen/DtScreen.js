import React from 'react';
import { View, ScrollView, Text,Image, StyleSheet } from 'react-native';
import styles from '../MainScreen/stylesMain';
import IngredientItemList from '../../components/IngredientItemList/IngredientItemList.js'
import DShero from '../../components/DSHero.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface Props extends NativeStackScreenProps<MainParams, 'recipeDetail'> {}

const DetailScreen = (props: Props) => {
  const { route: {params: receta} } = props;
  const {name, description, love, recent, ingredientes, image, tag} = receta;
  
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
      <DShero 
        imageUrl={image}
        tag={tag}
        name={name}
      />

      <Text>{description}</Text>
      <ScrollView>
        {renderIngredients}
      </ScrollView>
    </View>
  )
}

export default DetailScreen;