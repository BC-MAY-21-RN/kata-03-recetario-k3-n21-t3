import React, {useState, useEffect} from 'react'
import {View, Text, SafeAreaView, ScrollView } from 'react-native'
import styles from './stylesMain'
import {Card, Search} from '../../components/index.js'
import recetas from '../../helpers/recetas.json'

const MainScreen = (props) => {
  const {navigation} = props
  const [state, setState] = useState('')
  const [recetario, setRecetario] = useState(recetas)
  const [renderRecent, setRenderR] = useState(null)
  const [renderTrending, setRender] = useState(null)

  const updateSearch = (state) => setState(state)

  const updateToRecent = (receta) =>{
    recetas[receta.id-1].recent = 1
    setRecetario(recetas)
    const temp2 = recetario?.map((receta, index)=>{
      if(receta.recent == 1)
      {
        return <Card key={`recetas-${index}`} receta={receta} onClick={onSelectedRecipe}/>
      }
    })
    setRenderR(temp2)
  }

  const onSelectedRecipe = (receta) =>{
    updateToRecent(receta)
    navigation.navigate('DtScreen', receta)
  }

  useEffect(() => {
    if(state!="")
    {
      const temp = recetario?.map((receta, index)=>{
        if(receta.tag=="TRENDING" && receta.name.toLowerCase().includes(state.toLowerCase()))
        {
          return <Card key={`recetas-${index}`} receta={receta} onClick={onSelectedRecipe}/>
        }
      })
      setRender(temp)
    }else
    {
      const temp = recetario?.map((receta, index)=>{
        if(receta.tag=="TRENDING")
        {
          return <Card key={`recetas-${index}`} receta={receta} onClick={onSelectedRecipe}/>
        }
      })
      setRender(temp)
    }
  }, [state])

  return(
    <SafeAreaView style={styles.container}>
      <Search updateSearch={updateSearch} state={state}/>
      <ScrollView style={styles.body}>
        <View style={styles.container2  }>
          
        <Text style={styles.text}> Trending</Text>
        <ScrollView horizontal={true}>{renderTrending}</ScrollView>
      
        <Text style={styles.text}> Recent </Text>
        <ScrollView horizontal={true}>{renderRecent}</ScrollView>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MainScreen