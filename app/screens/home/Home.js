import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import { AppFlatList, AppNetworkChecker } from '../common/';
import { CompanyItem } from './components/';
import Autocomplete from 'react-native-autocomplete-input';
import { getCompanies } from '../../data/MockDataAPI';
export function Home() {

  const [isSuggestion, setIsSuggestion] = useState([]);
  const [searchedRes, setSearchedRes] = useState(getCompanies());
  const [hideRes, setHideRes] = useState(false);

  const {
    container, autocompleteContainer
  } = styles;

  const _onChangeInputText = (text) => {
    setHideRes(!text);
    let matches = [];
    if (text) {
      matches = getCompanies().filter(res => {
        const regex = new RegExp(text.trim() + "", 'i');
        return res.name.match(regex);
      });
      setIsSuggestion(matches);
    } else {
      setIsSuggestion(getCompanies());
      setSearchedRes(getCompanies());

    }
  }

  function _submitText(item) {
    setHideRes(true);
    let matches = [];
    matches.push(item);
    setSearchedRes(matches);
  }

  return (
    <View style={container}>
      <View style={autocompleteContainer}>
        <Autocomplete
          placeholder='Enter stock name'
          data={isSuggestion}
          hideResults={hideRes}
          query={getCompanies()}
          onChangeText={(text) => _onChangeInputText(text)}
          flatListProps={{
            keyExtractor: (_, idx) => idx,
            renderItem: ({ item }) => <TouchableOpacity onPress={() => _submitText(item)}><Text>{item.name}</Text></TouchableOpacity>,
          }}
        />
      </View>
      <AppFlatList marginTop={40} numColumns={1} data={searchedRes}
        renderItem={({ item }) => <CompanyItem data={item} />} />
    </View>
  );
}