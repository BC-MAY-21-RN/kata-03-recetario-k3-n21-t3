import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import {Styles} from './styles.js'

export const DSHero = (props) => {
  const [fav, setFav] = useState("heart-outline")

  const favorito = () =>{
    const temp = ( fav == 'heart-outline')?  'heart' : 'heart-outline'
    setFav(temp)
  }

  return (
    <View style={Styles.DSheroImage}>
      <View style={Styles.iconos}>
        <IonIcons name="close-outline" size={40} color="#fff"/>
        <View style={Styles.iconos2}>
          <IonIcons name="share-outline" size={30} color="#fff"/>
          <TouchableOpacity 
              onPress ={ () => {favorito(fav)}}>
            <IonIcons name={`${fav}`} size={30} color="#fff"/>
          </TouchableOpacity>
        </View>
      </View>

      <Image source={{uri: props.imageUrl}} style={Styles.imagen}/>
      <View style={Styles.recipeeData}>
      <Text style={Styles.recipeeDataChildren1}>{props.tag}</Text>
      <Text style={Styles.recipeeDataChildren2}>{props.name}</Text>
      </View>
    </View>
  )
}