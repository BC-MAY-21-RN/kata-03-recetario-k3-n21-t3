import React from 'react';
import { View, Text } from 'react-native';
import styles from '../MainScreen/stylesMain';

const DetailScreen = (props) => {
  return (
    <View style={styles.body}>
      {/*<ImageHero 
        link={props.shareLink}
        fav={props.fav}
        trending={props.tag}
        name={"Peperoni pizza pockets"}
        imagen={url}
        <ButtonBar></ButtonBar>
      />*/}
      <Text>Tag</Text>
      <Text>{/*Nombre Receta*/}</Text>
      {/* <Text>{props.descripcion} - ingredients for 3 servings</Text> */}
      {/*<ScrollView>
        map-this the x amount of ingredients{


      </ScrollView>*/}
    </View>
  )
}

export default DetailScreen;