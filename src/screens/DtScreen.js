import React from 'react';
import { View, Text } from 'react-native';

const DetailScreen = ({navigation}) => {

  //func gets the screen name of the component/screen you need to switch to, prerviously declared in the stack.screen comp 
  const changeScreen = (screenTarget) =>{
    navigation.navigate({screenTarget})
  }

  return (
    <View>
      {/* <ImageHero 
        link={props.shareLink}
        fav={props.fav}
        trending={props.tag}
        name={"Peperoni pizza pockets"}
        imagen={url}
      /> */}
      {/* <ButtonBar></ButtonBar> */}
      <Text>Tag</Text>
      <Button
        onPress={changeScreen("MainScreen")}
        title="Regresar a pantalla inicial"
        color="#841584"
        accessibilityLabel="Back to main screen"
      />

      <Text>{/*Nombre Receta*/}</Text>
      {/* <Text>{props.descripcion} - ingredients for 3 servings</Text> */}
      <ScrollView>
        {/*map-this the x amount of ingredients{
            <RecipeeListChildren 
              ingredient={props.ingredient} 
              ingredientQty={props.ingrQty} 
              measurement={props.measurement} 
            />
        */}
        <Text>Placeholder</Text>
        <Text>Placeholder</Text>
        <Text>Placeholder</Text>
      </ScrollView>
    </View>
  )
}

export default DetailScreen;