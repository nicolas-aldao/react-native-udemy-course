import React from 'react';
import { useContext } from 'react';
import {
  FlatList,
  Linking,
  TouchableOpacity,
  Image,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { RootStackParamList } from '../../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Context as BlogContext } from '../../../context/AppContext';
import CustomText from '../../atoms/CustomText';
import CustomButton from '../../atoms/CustomButton';
import BasicLayout from '../../layouts/BasicLayout';
import { theme } from '../../../themes';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const BlogsScreen: React.FC<Props> = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  const isDarkMode = useColorScheme() === 'dark';

  const ThrashIcon = () =>
    isDarkMode ? (
      <Image
        source={require('../../../assets/img/thrash-icon-dark.png')}
        style={styles.thrashIcon}
      />
    ) : (
      <Image
        source={require('../../../assets/img/thrash-icon.png')}
        style={styles.thrashIcon}
      />
    );

  return (
    <BasicLayout title="Blogs" marginLeft={0}>
      <>
        <CustomButton title="Add Post" onPress={() => addBlogPost()} />
        <View style={styles.rowContainer}>
          <FlatList
            data={state}
            keyExtractor={blogPost => blogPost.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('BlogpostDetail', { id: item.id });
                  }}>
                  <View style={styles.row}>
                    <View style={styles.rowTextContainer}>
                      <CustomText stylesFromProps={styles.text}>
                        {`${item.title} - ${item.id}`}
                      </CustomText>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        deleteBlogPost(item.id);
                      }}>
                      <ThrashIcon />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.flaticon.com/free-icons/delete')
          }>
          <CustomText>Delete icons created by Freepik - Flaticon</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://pinetools.com/colorize-image')
          }>
          <CustomText>
            png icons recolorized with pinetools.com/colorize-image
          </CustomText>
        </TouchableOpacity>
      </>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.text,
    fontSize: 18,
  },
  rowContainer: {
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: theme.colors.text,
    borderBottomWidth: 1,
  },
  rowTextContainer: {},
  thrashIcon: {
    display: 'flex',
    alignSelf: 'flex-end',
    height: 20,
    width: 20,
  },
});

export default BlogsScreen;

BlogsScreen.defaultProps = {
  navigation: undefined,
};
