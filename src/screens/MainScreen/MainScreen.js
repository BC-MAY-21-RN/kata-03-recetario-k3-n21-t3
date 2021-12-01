import React from 'react'
import {Alert, Button, Text, TextInput, SafeAreaView, ScrollView, StyleSheet,  } from 'react-native';
//import { SearchBar } from 'react-native-elements';
import styles from './stylesMain';
import Card from '../../components/Card';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const MainScreen = (props: Props) => {
  const {navigation} = props;
  
  const changeScreen = () =>{
      navigation.navigate('DtScreen')
  }
  
  return(
    <SafeAreaView style={styles.container}>  
      <ScrollView style={styles.body}>
        
        <TextInput 
          style={styles.SearchBar}
        />
        
        {/* //horizontal Scroll */}
        

        {/* //Text > trending */}
        <Text style={styles.text}> Trending</Text>
          {/* //horizontal Scroll */}
          <ScrollView horizontal={true}>
            <Card />
          </ScrollView>

        {/* //Text > trernding */}
        <Text style={styles.text}> Recent </Text>

        { <Button
          onPress = {() => changeScreen()}
          title="Boton para moverte a otra pagina"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />}
          {/* //horizontal Scroll */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default MainScreen;