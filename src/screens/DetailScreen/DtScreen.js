import React from 'react';
import { View, ScrollView, Text,Image, StyleSheet } from 'react-native';
import styles from './stylesDtScreen.js';
import IngredientItemList from '../../components/IngredientItemList/IngredientItemList.js'
import DShero from '../../components/DSHero.js';
import recents from '../../helpers/recents.json';

interface Props extends NativeStackScreenProps<MainParams, 'recipeDetail'> {}

const DetailScreen = (props: Props) => {
  const { route: {params: receta} } = props;
  const {name, description, love, recent, servings, ingredientes, image, tag} = receta;

  const renderIngredients = ingredientes?.map((ingredient, index)=>{
    return <IngredientItemList 
      key={`Ingredient-${index}`}
      name={ingredient.nombre}
      quantity={ingredient.cantidad}
      unit={ingredient.unit}
    />
  })

  /*const AddToRecents = () => {
    fs.readFile(recents, function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.push(receta)
            const json = JSON.stringify(obj);
            fs.writeFile(recents, json);
        }
    });
  }

  AddToRecents();*/
  //recents.push(receta)

  return (
    <View style={styles.body}>
      <DShero 
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