import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import cardStyles from './CardStyles';

interface Props extends NativeStackScreenProps<any, any> {}

const Item = ({name, img}, props: Props) => {
  const {navigation} = props;

  return (
    <TouchableOpacity 
    style={cardStyles.containerCard}
    onPress ={ () => {
      //navegacion a la otra pagina
    }}>
      <View style={cardStyles.viewStyle}>
       <Image style={cardStyles.Image}
          source={img}
        />
        <Text style={cardStyles.cardText}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Item;