import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {}

const ListScreen: React.FC<Props> = () => {
  const friends = [
    { name: 'Friend #1', key: '1' },
    { name: 'Friend #2', key: '2' },
    { name: 'Friend #3', key: '3' },
    { name: 'Friend #4', key: '4' },
  ];

  return (
    <BasicLayout title="List">
      <>
        <FlatList
          data={friends}
          renderItem={({ item }) => {
            return (
              <CustomText style={styles.textStyle} key={item.key}>
                {item.name}
              </CustomText>
            );
          }}
        />
      </>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5,
  },
});

export default ListScreen;
