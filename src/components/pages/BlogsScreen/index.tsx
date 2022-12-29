import React, { useEffect, useState } from 'react';
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
import BasicLayout from '../../layouts/BasicLayout';
import { theme } from '../../../themes';
import MessageModal from '../../organisms/MessageModal';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const BlogsScreen: React.FC<Props> = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);
  const [messageError, setMessageError] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    try {
      getBlogPosts(); // first time we load this screen
    } catch (err) {
      setMessageError('Ha ocurrido un error, reintenta más tarde.');
      console.log('useEffect ' + err);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let listener: any = navigation.addListener('focus', () => {
      // every time this screen gets focus again
      getBlogPosts();
    });
    return () => {
      // when we don't use this screen anymore we remove the listener
      listener = undefined;
    };
  }, []);

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

  const EditIcon = () =>
    isDarkMode ? (
      <Image
        source={require('../../../assets/img/edit-icon-dark.png')}
        style={styles.editIcon}
      />
    ) : (
      <Image
        source={require('../../../assets/img/edit-icon.png')}
        style={styles.editIcon}
      />
    );

  return (
    <BasicLayout title="Blogs" marginLeft={0}>
      <>
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
                    <View>
                      <CustomText stylesFromProps={styles.text}>
                        {item.title}
                      </CustomText>
                    </View>
                    <View style={styles.rowIconsContainer}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('EditBlogpost', { id: item.id });
                        }}>
                        <EditIcon />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          try {
                            deleteBlogPost(item.id);
                          } catch (err) {
                            setMessageError(
                              'Ha ocurrido un error, reintenta más tarde.',
                            );
                            console.log('error ' + err);
                          }
                        }}>
                        <ThrashIcon />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <MessageModal
          textModal={messageError}
          onClose={() => setMessageError('')}
          messageCondition={messageError !== ''}
        />
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
  rowIconsContainer: {
    flexDirection: 'row',
  },
  thrashIcon: {
    height: 20,
    width: 20,
  },
  editIcon: {
    height: 22,
    width: 22,
    marginRight: 10,
  },
});

export default BlogsScreen;

BlogsScreen.defaultProps = {
  navigation: undefined,
};
