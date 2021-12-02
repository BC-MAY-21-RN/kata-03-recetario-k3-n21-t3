import React from 'react';
import { View, Text } from 'react-native';
import styles from '../MainScreen/stylesMain';

interface Props extends NativeStackScreenProps<MainParams, 'recipeDetail'> {}

const DetailScreen = (props: Props) => {
  const { route: {params: receta} } = props;

  const {name, description, love, recent, ingredients, image, tag} = receta;
  
  return (
    <View style={styles.body}>
      {/*<ImageHero 
        link={props.shareLink}
        fav={props.fav}
        recent={props.tag}
        name={"Peperoni pizza pockets"}
        imagen={url}
        <ButtonBar></ButtonBar>
      />*/}
      <Text></Text>
      <Text>{/*Nombre Receta*/}</Text>
      {/* <Text>{props.descripcion} - ingredients for 3 servings</Text> */}
      {/*<ScrollView>
        map-this the x amount of ingredients{


      </ScrollView>*/}
    </View>
  )
}

export default DetailScreen;