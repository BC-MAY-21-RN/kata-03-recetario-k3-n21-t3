import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.js'

export const IngredientItemList = ({name, quantity, unit}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listchildren}>{name}</Text>
      <Text style={styles.listchildren2}>{quantity}{unit}</Text>
    </View>
  )
}