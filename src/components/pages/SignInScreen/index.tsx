import React from 'react';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  title?: string;
}

const SignInScreen: React.FC<Props> = () => {
  return <BasicLayout title="SignInScreen"></BasicLayout>;
};

export default SignInScreen;

SignInScreen.defaultProps = {
  title: undefined,
};
