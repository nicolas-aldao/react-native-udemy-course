import React, { useContext } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { Context as BlogContext } from '../../../context/AppContext';
import BasicLayout from '../../layouts/BasicLayout';
import BlogPostForm from '../../organisms/BlogPostForm';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const EditBlogpostFormScreen: React.FC<Props> = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  const { state, editBlogPost } = useContext(BlogContext);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BasicLayout marginLeft={0}>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop());
        }}
      />
    </BasicLayout>
  );
};

export default EditBlogpostFormScreen;

EditBlogpostFormScreen.defaultProps = {
  navigation: undefined,
};
