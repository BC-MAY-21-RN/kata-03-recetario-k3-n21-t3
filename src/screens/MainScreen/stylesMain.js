import { Dimensions, StyleSheet, StatusBar } from 'react-native'

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
    fontSize: 25,
    fontWeight: '600',
    paddingBottom: 20,
    paddingTop: 15,
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  SearchBar:{
    borderColor: '#fff',
    borderWidth: 2,
    margin: 10,
  },
  container2:{
    margin: 10,
  },
  iconSize:{
    fontSize: 20,
  },
  iconColor:{
    color: "black",
  }
})

export default styles