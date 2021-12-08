import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
  
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
