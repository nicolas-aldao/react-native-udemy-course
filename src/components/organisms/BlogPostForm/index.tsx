import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from '../../atoms/CustomButton';
import CustomText from '../../atoms/CustomText';
import CustomTextInput from '../../atoms/CustomTextInput';

interface Props {
  title?: string;
  onSubmit: (title: string, content: string) => void;
  initialValues?: object;
}

const BlogPostForm: React.FC<Props> = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues?.title);
  const [content, setContent] = useState(initialValues?.content);

  return (
    <>
      <CustomText stylesFromProps={styles.label}>Enter Title:</CustomText>
      <CustomTextInput value={title} onChangeText={text => setTitle(text)} />
      <CustomText stylesFromProps={styles.label}>Enter Content:</CustomText>
      <CustomTextInput
        value={content}
        onChangeText={text => setContent(text)}
      />
      <CustomButton
        title="Save Post"
        onPress={() => onSubmit(title, content)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 3,
  },
});

export default BlogPostForm;

BlogPostForm.defaultProps = {
  title: undefined,
  initialValues: { title: '', content: '' },
};
