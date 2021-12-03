import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
//import styled from 'styled-components/native'

const Component = (props) => {

  return (
    <View>
        <Image resizeMode='contain' source={props.imageUrl}/>
      <Text>{props.tag}</Text>
      <Text>{props.name}</Text>
    </View>
  )
}
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