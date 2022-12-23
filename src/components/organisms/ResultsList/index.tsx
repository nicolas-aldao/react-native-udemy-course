import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CustomText from '../../atoms/CustomText';
import ResultDetail from '../ResultDetail';

interface Props {
  title: string;
  results?: [];
}

const ResultsList: React.FC<Props> = ({ title, results }) => {
  console.log(typeof styles.title);
  return (
    <View style={styles.container}>
      <CustomText stylesFromProps={styles.title}>{title}</CustomText>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
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
