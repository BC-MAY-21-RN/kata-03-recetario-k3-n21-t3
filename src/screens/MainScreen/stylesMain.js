import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height : Dimensions.get('window').height,
  },
  body:{
    backgroundColor: '#202121',
    height : Dimensions.get('window').height,
  },
  text:{
    color: '#B71F65',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  SearchBar:{
    borderColor: '#fff',
    borderWidth: 2,
    margin: 10,
  }
})

export default styles