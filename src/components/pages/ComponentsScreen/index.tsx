import React from 'react';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  title?: string;
}

const ComponentsScreen: React.FC<Props> = () => {
  return (
    <BasicLayout title="Form">
      <CustomText>Content goes here</CustomText>
    </BasicLayout>
  );
};

export default ComponentsScreen;

ComponentsScreen.defaultProps = {
  title: undefined,
};
