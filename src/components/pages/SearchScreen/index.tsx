import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';
import ResultsList from '../../organisms/ResultsList';
import SearchBar from '../../organisms/SearchBar';
import useSearchYelpApi from './useSearchYelpApi';

interface Props {
  //title?: string;
}

const SearchScreen: React.FC<Props> = () => {
  const [search, setSearch] = useState('');
  const [results, searchApi, errorMessage] = useSearchYelpApi();

  const filterResultsByPrice = (price: string) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  // TODO: Agregar flex: 1 al contenedor principal para arreglar el scroll en android
  return (
    <BasicLayout title="Search" marginLeft={0}>
      <>
        <SearchBar
          search={search}
          onChangeSearch={(newSearch: string) => setSearch(newSearch)}
          onSearchSubmit={() => searchApi(search)}
        />
        {errorMessage ? <CustomText>{errorMessage}</CustomText> : null}
        <ScrollView>
          <ResultsList
            title="Cost Effective"
            results={filterResultsByPrice('$')}
          />
          <ResultsList
            title="Bit Pricier"
            results={filterResultsByPrice('$$')}
          />
          <ResultsList
            title="Big Spender"
            results={filterResultsByPrice('$$$')}
          />
        </ScrollView>
      </>
    </BasicLayout>
  );
};

export default SearchScreen;

SearchScreen.defaultProps = {
  //title: undefined,
};
