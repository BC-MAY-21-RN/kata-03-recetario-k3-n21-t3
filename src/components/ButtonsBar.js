import React from 'react'
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements'

const Component = (props) => {
  return (
    <View>
    <Icon
      name='sc-telegram'
      type='font-awesome'
      color='#517fa4'
    />

    <Icon
      Favorite
      name='ios-american-football'
      type='font-awesome'
      color='#517fa4'
    />

    <Icon
      raised
      name='heartbeat'
      type='font-awesome'
      color='#f50'
      onPress={() => console.log('hello')} />
        </View>
      )
}

export default Component;