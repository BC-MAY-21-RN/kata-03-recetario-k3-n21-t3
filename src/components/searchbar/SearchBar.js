import React from 'react';
import { SearchBar } from 'react-native-elements';

const Search = ({state, updateSearch}) => {
 
  return (
    <SearchBar
      placeholder="Buscar"
      onChangeText={updateSearch}
      value={state}
    />
  );
}
export default Search;