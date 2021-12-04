import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'

//import styled from 'styled-components/native'
//const {width, height} = Dimensions.get('window');

const Component = (props) => {

  return (
    <View style={Styles.DSheroImage}>
      <View style={Styles.iconos}>
        <IonIcons name="close-outline" size={40} color="#fff"/>
        <View>
          <IonIcons name="share-outline" size={30} color="#fff">
          <IonIcons name="heart-outline" size={30} color="#fff"/>
          </IonIcons>
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

const Styles = StyleSheet.create({
  
  DSheroImage:{
    height: "45%"
  },
  iconos: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    width: "100%",
    zIndex: 1,
    padding: 20,
    alignItems: 'center',
  },

  imagen: {
    width: "100%",
    height: "100%",
    opacity: 0.3
  },
  
  recipeeData:{
    position: 'absolute',
    bottom: 0,
    padding: 20,
  },

  recipeeDataChildren1:{
    fontSize: 18,
    color: 'white',
  },
  recipeeDataChildren2:{
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  }

});
//default styling
// const styles = StyleSheet.create({
//   heroImage:{
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100%',
//     height: '50%',
//   },
// })
//styled component
// const DShero = styled.View`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   height: 40%;
//   border: 1px solid red;
// `;

// const DSHeroImage = styled.View`
  
// `;

export default Component;

{/*<ImageHero 
        link={props.shareLink}
        fav={props.fav}
        recent={props.tag}
        name={"Peperoni pizza pockets"}
        imagen={url}
        <ButtonBar></ButtonBar>
      />*/}