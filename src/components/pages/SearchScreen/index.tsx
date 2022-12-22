import React, { useState } from 'react';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';
import SearchBar from '../../organisms/SearchBar';

interface Props {
  //title?: string;
}

const SearchScreen: React.FC<Props> = () => {
  const [search, setSearch] = useState('');

  return (
    <BasicLayout title="Search" marginLeft={0}>
      <>
        <SearchBar
          search={search}
          onChangeSearch={(newSearch: string) => setSearch(newSearch)}
          onSearchSubmit={() => console.log('search submmited')}
        />
        <CustomText>{search}</CustomText>
        <CustomText>Search Screen</CustomText>
      </>
    </BasicLayout>
  );
};

export default SearchScreen;

SearchScreen.defaultProps = {
  //title: undefined,
};
