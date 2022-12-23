import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../atoms/CustomText';
import ResultDetail from '../ResultDetail';

interface Props {
  title: string;
  results?: [];
}

const ResultsList: React.FC<Props> = ({ title, results }) => {
  const navigation = useNavigation();

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <CustomText stylesFromProps={styles.title}>{title}</CustomText>
      <CustomText>{results?.length}</CustomText>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { id: item.id })}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultsList;

ResultsList.defaultProps = {
  title: undefined,
  results: [],
};
