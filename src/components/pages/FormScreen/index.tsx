import React from 'react';
import CustomTextInput from '../../atoms/CustomTextInput';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  // children: JSX.Element;
  // title?: string;
}

const FormScreen: React.FC<Props> = () => {
  return (
    <BasicLayout title="Form" marginLeft={0}>
      <CustomTextInput />
    </BasicLayout>
  );
};

export default FormScreen;

FormScreen.defaultProps = {
  // title: undefined,
};
