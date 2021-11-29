import React from 'react'
import { View, Text, Image } from 'react-native'

const Component = (props) => {
  return (
    <View>
      <ButtonsBar
        link={props.shareLink}
        fav={props.fav}
      />
      <Image source={{uri: image}}/>
      <Text>{props.tag}</Text>
      <Text>{props.name}</Text>
    </View>
  )
}

export default Component;