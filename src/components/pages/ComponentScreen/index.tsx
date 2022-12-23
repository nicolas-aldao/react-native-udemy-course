import React from 'react';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  title?: string;
}

const ComponentScreen: React.FC<Props> = () => {
  return (
    <BasicLayout title="Components">
      <CustomText>Content goes here</CustomText>
    </BasicLayout>
  );
};

export default ComponentScreen;

ComponentScreen.defaultProps = {
  title: undefined,
};
