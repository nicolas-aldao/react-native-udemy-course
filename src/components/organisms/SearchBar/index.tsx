import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  useColorScheme,
} from 'react-native';
import { theme } from '../../../themes';

interface Props {
  search: string;
  onChangeSearch: (val: string) => void;
  onSearchSubmit: () => void;
}

const SearchBar: React.FC<Props> = ({
  search,
  onChangeSearch,
  onSearchSubmit,
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.searchBar}>
      {isDarkMode ? (
        <Image
          source={require('../../../assets/img/search-dark.png')}
          style={styles.searchImg}
        />
      ) : (
        <Image
          source={require('../../../assets/img/search.png')}
          style={styles.searchImg}
        />
      )}
      <TextInput
        style={[styles.text, styles.inputSearch]}
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={(newSearch: string) => onChangeSearch(newSearch)}
        onEndEditing={() => onSearchSubmit()}
        cursorColor={theme.colors.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.text,
  },
  searchBar: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: 'black',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 300,
  },
  searchImg: {
    height: 20,
    width: 20,
  },
  inputSearch: {
    marginLeft: 5,
    fontSize: 15,
    width: 250,
  },
});

export default SearchBar;
