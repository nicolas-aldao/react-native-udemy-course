import React, { useContext } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { Context as BlogContext } from '../../../context/AppContext';
import BasicLayout from '../../layouts/BasicLayout';
import BlogPostForm from '../../organisms/BlogPostForm';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const AddBlogpostFormScreen: React.FC<Props> = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BasicLayout marginLeft={0}>
      <BlogPostForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate('Blogs'));
        }}
      />
    </BasicLayout>
  );
};

export default AddBlogpostFormScreen;

AddBlogpostFormScreen.defaultProps = {
  navigation: undefined,
};
