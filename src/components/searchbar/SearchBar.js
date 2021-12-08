import React from 'react';
import { SearchBar } from 'react-native-elements';

export const Search = ({state, updateSearch}) => {
 
  return (
    <SearchBar
      placeholder="Buscar"
      onChangeText={updateSearch}
      value={state}
    />
  );
}
