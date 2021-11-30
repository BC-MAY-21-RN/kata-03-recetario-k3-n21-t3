import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ItemList = () => {
  return (
    <View>
      <Divider></Divider>
      <TouchableOpacity onPress={() => {}}>
        <Text>Soy un boton</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ItemList;