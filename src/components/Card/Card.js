import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import cardStyles from './CardStyles';
import recipeModel from '../../models/recipeModel.js'

interface Props{
  receta: recipeModel,
  onClick: (receta: recipeModel) => void;
}


const Item = (props: Props) => {
  const {receta, onClick} = props
  const { name, image } = receta;

  return (
    <TouchableOpacity 
    style={cardStyles.containerCard}
    onPress ={ () => onClick(receta)}
    >
      <View style={cardStyles.viewStyle}>
       <Image style={cardStyles.Image}
          source={image}
        />
        <Text style={cardStyles.cardText}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Item;