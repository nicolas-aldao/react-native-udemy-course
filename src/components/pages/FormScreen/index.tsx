import React, { useState } from 'react';
import CustomText from '../../atoms/CustomText';
import CustomTextInput from '../../atoms/CustomTextInput';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  // children: JSX.Element;
  // title?: string;
}

const FormScreen: React.FC<Props> = () => {
  const [name, setName] = useState('');
  return (
    <BasicLayout title="Form" marginLeft={0}>
      <>
        <CustomTextInput
          value={name}
          onChangeText={(value: string) => setName(value)}
        />
        {name.length < 4 ? (
          <CustomText>Name must be 4 characters long or more</CustomText>
        ) : null}
      </>
    </BasicLayout>
  );
};

export default FormScreen;

FormScreen.defaultProps = {
  // title: undefined,
};
