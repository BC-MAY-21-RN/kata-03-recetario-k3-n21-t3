import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
const Component = (props) => {
  const [fav, setFav] = useState("heart-outline")

  const favorito = () =>{
    if(fav == 'heart-outline'){
      setFav('heart')
    }else{
      setFav('heart-outline')
    }
  }
  return (
    <View style={Styles.DSheroImage}>
      <View style={Styles.iconos}>
        <IonIcons name="close-outline" size={40} color="#fff"/>
        <View>
          <IonIcons name="share-outline" size={30} color="#fff">
          <TouchableOpacity 
              onPress ={ () => {favorito(fav)}}>
            <IonIcons name={`${fav}`} size={30} color="#fff"/>
          </TouchableOpacity>
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


export default Component;