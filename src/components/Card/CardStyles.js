import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const cardStyles = StyleSheet.create({
  containerCard:{
    flex: 1,
    width: 100,
    marginRight: 25,
    marginBottom: 20,
  },
  viewStyle:{
    marginRight: 5,
    marginLeft: 5
  },
  Image:{
    width: 110,
    height: 110,
    borderRadius: 12,
    
  },
  cardText:{
    textAlign: 'center',
    fontSize: 20
  }
})

export default cardStyles;