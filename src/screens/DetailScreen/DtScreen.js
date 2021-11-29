import React from 'react';
import { View, Text } from 'react-native';
import  ImageHero from '../components/DSHero'
import  ButtonBar from '../components/ButtonBar'

const DetailScreen = (props) => {
  return (
    <View>
      <ImageHero 
        link={props.shareLink}
        fav={props.fav}
        trending={props.tag}
        name={"Peperoni pizza pockets"}
        imagen={url}
      />
      <ButtonBar></ButtonBar>
      <Text>{/*Tag*/}</Text>
      <Text>{/*Nombre Receta*/}</Text>
      {/* <Text>{props.descripcion} - ingredients for 3 servings</Text> */}
      <ScrollView>
        {/*map-this the x amount of ingredients{*/}

      </ScrollView>
    </View>
  )
}

export default DetailScreen;