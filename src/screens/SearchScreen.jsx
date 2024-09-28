import { View, StyleSheet } from 'react-native';
import {Text, Searchbar, Card, useTheme} from "react-native-paper";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {fromAddress} from "react-geocode";

export default function SearchScreen() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const [startSearch, setStartSearch] = useState(false);

  useEffect(() => {
    if (startSearch)
      searchLocation();
    setStartSearch(false);
  }, [startSearch]);

  function searchLocation() {
    fromAddress(searchQuery)
      .then(({results}) => {
        console.log(results);
      })
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Searchbar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
        icon='arrow-left'
        onIconPress={() => navigation.goBack()}
        style={{marginVertical: 5, marginHorizontal: 15}}
        traileringIcon="magnify"
        onSubmitEditing={() => setStartSearch(true)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})
