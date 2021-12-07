import React from 'react'
import {View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './stylesMain';
import Card from '../../components/Card/Card.js';
import recetas from '../../helpers/recetas.json';
import Search from '../../components/searchbar/SearchBar';
import {useState, useEffect} from 'react'

const MainScreen = (props) => {
  const {navigation} = props;
  const [state, setState] = useState('')
  const [renderRecipe, setRecipe] = useState()
  
  const updateSearch = (state) => {
    setState(state);
  };

  const onSelectedRecipe = (receta) =>{
    navigation.navigate('DtScreen', receta)
  }


  const renderRecent = recetas?.map((receta, index)=>{
    if(receta.recent == 1)
    {
      return <Card key={`recetas-${index}`} receta={receta} onClick={onSelectedRecipe}/>
    }
  })

  useEffect(() => {
    if(state=="")
    {recetas?.map((receta, index)=>{
      if(receta.tag == "TRENDING")
        recetaCard += <Card key={`recetas-${index}`} receta={receta} onClick={onSelectedRecipe} />
        setRecipe(recetaCard)
      })
    }
  }, [state])


  {/* Render para renreziar las recetas recientes. */}
  return(
    <SafeAreaView style={styles.container}>
      <Search updateSearch={updateSearch} state={state}/>
      <ScrollView style={styles.body}>
        <View style={styles.container2}>
          
        <Text style={styles.text}> Trending</Text>
        <ScrollView horizontal={true}>{renderRecipe}</ScrollView>
      
        <Text style={styles.text}> Recent </Text>
        <ScrollView horizontal={true}>{renderRecent}</ScrollView>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default MainScreen;