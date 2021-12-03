import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const ItemList = ({name, quantity, unit}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listchildren}>{name}</Text>
      <Text style={styles.listchildren2}>{quantity}{unit}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem:{
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '3%',
    marginRight: '3%',
    width: '94%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  listchildren:{
    paddingBottom: 10,
    paddingTop: 10,
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize'
  },
  listchildren2:{
    paddingBottom: 10,
    paddingTop: 10,
    color: 'white',
    fontSize: 16,
  },
})

export default ItemList;