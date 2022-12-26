import React, { useContext } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { Context } from '../../../context/AppContext';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const BlogpostDetailScreen: React.FC<Props> = ({
  route: {
    params: { id },
  },
}) => {
  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BasicLayout>
      <CustomText>{blogPost.title}</CustomText>
    </BasicLayout>
  );
};

export default BlogpostDetailScreen;

BlogpostDetailScreen.defaultProps = {
  navigation: undefined,
};
