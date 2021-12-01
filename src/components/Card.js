import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Item = () => {
  return (
    <TouchableOpacity>
      <View>
        <Image style={{width: 20, height: 20}}
          source={{uri: ""}}
        />
        <Text>
          ASDADSSDS
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Item;